/*---------------------------------------------------- */
	/* Active-tab
------------------------------------------------------ */ 
$(function(){
    $(".list").on("click","a",function(){
    $("a").removeClass("active-tab"),
    $(this).addClass("active-tab");
    });
})
/*---------------------------------------------------- */
	/* tag
------------------------------------------------------ */ 
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
$(document).ready(function() {
    $('#addTagBtn').click(function() {
        $('#tags option:selected').each(function() {
            $(this).appendTo($('#selectedTags'));
        });
    });
    $('#removeTagBtn').click(function() {
        $('#selectedTags option:selected').each(function(el) {
            $(this).appendTo($('#tags'));
        });
    });
    $('.tagRemove').click(function(event) {
        event.preventDefault();
        $(this).parent().remove();
    });
    $('ul.tags').click(function() {
        $('#search-field').focus();
    });
    $('#search-field').keypress(function(event) {
        if (event.which == '13') {
            if (($(this).val() != '') && ($(".tags .addedTag:contains('" + $(this).val() + "') ").length == 0 ))  {
                $('<li class="tag-item">' + $(this).val() + '<button class="tagRemove" onclick="$(this).parent().remove();"><i class="fas fa-times"></i></button><input type="hidden" value="' + $(this).val() + '" name="tags[]"></li>').insertBefore('.tags .tagAdd');
                $(this).val('');
            } else {
                $(this).val('');

            }
        }
    });
});
/*---------------------------------------------------- */
	/* sidebar
------------------------------------------------------ */ 
$('#triger1').on('click', function (event){
	$('.sidebar-wrap__hesh').toggleClass('sidebar-wrap-active');
}); 
$('#triger2').on('click', function (event){
	$('.mobile-overlay, .sidebar-fixed__moblie').toggleClass('active');
    $('body').toggleClass('lock');
});
/*---------------------------------------------------- */
	/* loader
------------------------------------------------------ */ 
function progressLoading(){
    var prg = document.getElementById('progres-loader');
    var percent = document.getElementById('percent-counter');
    var counter = 5;
    var progress = 25;
    var id = setInterval (frame, 50);
    function frame() {
       if(progress === 500  && counter == 100) {
         clearInterval(id);
       }
       else{
            progress += 5;
            counter += 1;
            prg.style.width = progress + 'px';
            percent.innerHTML = counter + '%';
        }
    }
}
/*---------------------------------------------------- */
	/* loader-hide
------------------------------------------------------ */ 
progressLoading();
$(window).load(function() {
    $("#loader").delay(4490).fadeOut("slow", function(){
      $("#preloader").delay(10).fadeOut("fast");
    });       
})
