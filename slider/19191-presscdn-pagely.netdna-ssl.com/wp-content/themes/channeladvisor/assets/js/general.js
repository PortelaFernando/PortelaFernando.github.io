// JavaScript Document
(function($) {
  $( document ).ready(function() {

    //add for question tag


    // --- language dropdown --- //
     var $dropTrigger = $(".dropdown dt a");
    var $languageList = $(".dropdown dd ul");

    // open and close list when button is clicked
    $dropTrigger.click(function(e){
        if($(this).hasClass("active")){
            $languageList.slideUp(200);
            $(this).removeClass("active");
        }
        else{
            $languageList.slideDown(200);
            $(this).addClass("active");
        }
        return false;
    });

    // close list when anywhere else on the screen is clicked
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("dropdown"))
            $languageList.slideUp(200);
        $dropTrigger.removeAttr("class");
    });

    // when a language is clicked, make the selection and then hide the list
    jQuery(".dropdown dd ul li a").click(function() {
        var clickedValue = $(this).parent().attr("class");
        var clickedTitle = $(this).find("em").html();
        $("#target dt").removeClass().addClass(clickedValue);
        $("#target dt em").html(clickedTitle);
        $languageList.hide();
        $dropTrigger.removeAttr("class");
    });


  //add for Form
    $("select").addClass("placeholder");
    $("select").change(function () {
        if($(this).val() == "") $(this).addClass("placeholder");
        else $(this).removeClass("placeholder")
    });



});




//add for action panel

$(function() {
    jQuery(".action-panel").on("click", function(e) {
        jQuery(".action-panel").toggleClass("panel-active");
        e.stopPropagation();
    });
    jQuery(document).on("click", function(e) {
        if ($(e.target).is(".action-panel") === false) {
            jQuery(".action-panel").removeClass("panel-active");
        }
    });
});

//add for sticky menu
//offset() measures how far down the sticky element is from the top of the window
var stickyTop = $(".header-bottom").offset().top;

//whenever the user scrolls, measure how far we have scrolled
$(window).scroll(function() {
    var windowTop = $(window).scrollTop();

    //check to see if we have scrolled past the original location of the sticky element
    if (windowTop > stickyTop) {

        //if so, change the sticky element to fised positioning
        jQuery(".header-bottom").addClass("stuck");
    } else {
        jQuery(".header-bottom").removeClass("stuck");
    }
});
//add for search
/* Search

 /*-----------------------------------------------------------------------------------*/

jQuery('.header-search a').on('click', function(e) {

    e.preventDefault();

    var $i = $(this).find('i');

    if ($i.hasClass('search-close')) {

        sdw_nav_show($i);

    } else {

        sdw_nav_hide($i);

    }



});

// $(".header-bottom").mouseleave(function(){
//     $(".header-search-wrap").hide();
//     $(".hide-on-search").show();
//     $(".header-search").find("i").switchClass( "search-close", "search-icon");
//     $(".header-search").find("input")
// });

/* Show hide icons/navigation in header */

function sdw_nav_hide($obj) {

    $obj.closest('.site-header').find('.hide-on-search').fadeOut(150).promise().done(function() {

        $obj.removeClass($obj.attr('data-icon-class')).addClass('search-close');

        //  $obj.closest('ul').find('li').hide();

        //  $obj.closest('li').show();

        $obj.closest('.site-header').addClass('search-active').find('.' + $obj.attr('data-wrap')).show();

        $obj.closest('.site-header').find('.' + $obj.attr('data-wrap')).find('.search-field').focus();

    });

}



function sdw_nav_show($obj) {

    $('.' + $obj.attr('data-wrap')).fadeOut(150).promise().done(function() {

        $obj.removeClass('search-close').addClass($obj.attr('data-icon-class'));

        $obj.closest('.site-header').removeClass('search-active').find('.hide-on-search').show();

        //  $obj.closest('ul').find('li').show();

    });



}
// $( document ).ready(function() {
// // add for responsive menu
// function menuHeight(){
//     $('.main-menu-inner nav').each(function () {
//         //console.log($(this).offset().top);
//         //console.log($('.site-header').outerHeight());
//         //console.log($(window).height());
//         $size = (($(window).height() - $('.site-header').outerHeight()));
//         $(".ubermenu.ubermenu-main").css({'height': ($size)});
//     });
// }
//
// menuHeight();
//
// $(window).on('load resize orientationchange', menuHeight);
//
// $('.ubermenu-responsive-toggle').click(function(){
//     $('body').toggleClass('menu-open');
// });
// $(".ubermenu-responsive-toggle").on("touchstart",function(e){
//     $('body').toggleClass('menu-open');
// });
// });

})(jQuery);
