(function($) {
  $.fn.productSlider = function() {
    var settings = $.extend($.productSlider.settings, arguments[0] || {});
    
    this.each(function() {
      var scrollable = $(this),
          viewport   = scrollable.children(settings.viewport);
      
      if (scrollable.children('.ui-slider').length < 1)
        scrollable.append('<div class="ui-slider"/>');
        
      var track = scrollable.find('.ui-slider');
      track.slider({
        max:   viewport.innerWidth() - scrollable.outerWidth(),
        slide: function(event, ui) {
          viewport.css('left', '-' + ui.value + 'px');
        }
      });

      $(settings.prev).click(function() { track.slider("moveTo", "-=" + settings.clickInc); });
      $(settings.next).click(function() { track.slider("moveTo", "+=" + settings.clickInc); });
    });
  };
  
  $.productSlider = {
    settings: {
      clickInc: 150,
      prev:     '.prev',
      next:     '.next',
      viewport: 'ul'
    }
  };
})(jQuery);