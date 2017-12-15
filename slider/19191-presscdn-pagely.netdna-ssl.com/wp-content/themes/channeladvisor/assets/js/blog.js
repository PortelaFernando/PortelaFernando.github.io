(function($){
  $(document).ready(function () {
    //equal height function
    var max = 0;
    var $this = $('.blog-item');

    function setHeight() {
        $('.blog-detail', $this).each(function () {
            $(this).height('');
            var h = $(this).height();
            max = Math.max(max, h);
        }).height(max);
    }

    //call height function on tab change
    setHeight();
    //call height function on resize
    $(window).on('load resize orientationchange', setHeight);


    $(".blog-left-inner").css({'min-height':($(".blog-sidebar").height()+'px')});
  });
})(jQuery);
