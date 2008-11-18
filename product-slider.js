(function($) {
  $.fn.productBrowser = function(elem) {
    this.each($.productBrowser);
  }
  
  $.productBrowser = function() {
    var scrollable = $(this),
        list       = scrollable.find('ul'),
        settings   = $.extend($.productBrowser.settings, arguments[0] || {});
        
      scrollable.slider({
        handle:  settings.handle,
        max:     ul.innerWidth() - $(this).outerWidth(),
        animate: settings.animate,
        //stop:    scrollHorizontal,
        slide:   function(event, ui) {
          list.css('left', '-' + ui.value + 'px');
        }
      });

      $(settings.prev).click(function() { scrollable.slider("moveTo", "-=" + settings.clickInc); });
      $(settings.next).click(function() { scrollable.slider("moveTo", "+=" + settings.clickInc); });
    }
  }
  
  $.extend($.productBrowser, {
    settings: {
      clickInc: '50px',
  	  handle:   '.handle',
  	  prev:     '.prev',
  	  next:     '.next',
  	  animate:  false
  	}
  });
})(jQuery);