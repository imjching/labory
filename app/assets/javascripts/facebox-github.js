/*
 * Facebox (for jQuery)
 * https://github.com/defunkt/facebox
 * Copyright Chris Wanstrath [chris@ozmm.org]
 * Modified by Jay [jay@imjching.com] to suit GitHub's style
 *
 * Usage:
 *
 *  jQuery(document).ready(function() {
 *    jQuery('a[rel*=facebox]').facebox()
 *  })
 *
 *  <a href="#terms" rel="facebox">Terms</a>
 *    Loads the #terms div in the box
 *
 *  You can also use it programmatically:
 *
 *    jQuery.facebox('some html')
 *    jQuery.facebox('some html', 'my-groovy-style')
 *
 *  The above will open a facebox with "some html" as the content.
 *
 *    jQuery.facebox(function($) {
 *      $.get('blah.html', function(data) { $.facebox(data) })
 *    })
 *
 *  The above will show a loading screen before the passed function is called,
 *  allowing for a better ajaxy experience.
 *
 *  The facebox function can also display the contents of a div:
 *
 *    jQuery.facebox({ div: '#box' })
 *    jQuery.facebox({ div: '#box' }, 'my-groovy-style')
 *
 *  Want to close the facebox?  Trigger the 'facebox:close' document event:
 *
 *    jQuery(document).trigger('facebox:close')
 *
 *  Facebox also has a bunch of other hooks:
 *
 *    facebox:loading
 *    facebox:beforeReveal
 *    facebox:reveal (aliased as 'facebox:afterReveal')
 *    facebox:init
 *    facebox:afterClose
 *
 *  Simply bind a function to any of these hooks:
 *
 *   $(document).bind('facebox:reveal', function() { ...stuff to do after the facebox and contents are revealed... })
 *
 */
(function($) {
  $.facebox = function(data, klass) {
    $.facebox.loading();

    if (data.div) {
      fillFaceboxFromHref(data.div, klass);
    } else if ($.isFunction(data)) {
      data.call($);
    } else {
      $.facebox.reveal(data, klass);
    }
  };

  /*
   * Public, $.facebox methods
   */

  $.extend($.facebox, {
    settings: {
      opacity: 0.5,
      overlay: true
    },

    loading: function() {
      init();
      if ($('.facebox-loading').length == 1) { // still loading
        return true;
      }
      showOverlay();

      $('.facebox-content')
        .empty()
        .append('<div class="facebox-loading"></div>');

      $('#facebox').show().css({
        top: getPageScroll()[1] + (getPageHeight() / 10),
        left: $(window).width() / 2 - ($('.facebox-popup').outerWidth() / 2)
      });

      $(document).bind('keydown.facebox', function(e) {
        if (e.keyCode == 27) {
          $.facebox.close();
        }
        return true;
      });
      $(document).trigger('facebox:loading');
    },

    reveal: function(data, klass) {
      $(document).trigger('facebox:beforeReveal');
      if (klass) { // add custom class
        $('.facebox-content').addClass(klass);
      }
      $('.facebox-content').empty().append(data);
      $('.facebox-loading').remove();
      $('.facebox-popup').children().fadeIn('normal');
      $('.facebox').css('left', $(window).width() / 2 - ($('.facebox-popup').outerWidth() / 2));
      $(".facebox-header").attr("tabindex", "-1");
      $(".facebox-content [data-facebox-id]").each(function() {
        $(this).attr("id", $(this).attr("data-facebox-id"));
      });
      $(".facebox .facebox-header").focus();
      $(document).trigger('facebox:reveal').trigger('facebox:afterReveal');
    },

    close: function() {
      $(document).trigger('facebox:close');
      return false;
    }
  });

  /*
   * Public, $.fn methods
   */

  $.fn.facebox = function(settings) {
    if ($(this).length == 0) return;

    init(settings);

    function clickHandler(e) {
      e.preventDefault();
      $.facebox.loading(true);

      // support for rel="facebox.inline_popup" syntax, to add a class
      // also supports deprecated "facebox[.inline_popup]" syntax
      var klass = this.rel.match(/facebox\[?\.(\w+)\]?/);
      if (klass) klass = klass[1];

      fillFaceboxFromHref(this.href, klass);
      return false;
    }

    return this.bind('click.facebox', clickHandler);
  };

  /*
   * Private methods
   */

  // called one time to setup facebox on this page
  function init(settings) {
    if ($.facebox.settings.inited) {
      return true;
    } else {
      $.facebox.settings.inited = true;
    }

    $(document).trigger('facebox:init');

    if (settings) {
      $.extend($.facebox.settings, settings);
    }
  }

  // getPageScroll() by quirksmode.com
  function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    } else if (document.body) { // all other Explorers
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }
    return new Array(xScroll,yScroll);
  }

  // Adapted from getPageSize() by quirksmode.com
  function getPageHeight() {
    var windowHeight
    if (self.innerHeight) { // all except Explorer
      windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
      windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  }

  // Figures out what you want to display and displays it
  // formats are:
  //     div: #id
  function fillFaceboxFromHref(href, klass) {
    // div
    if (href.match(/#/)) {
      var url    = window.location.href.split('#')[0];
      var target = href.replace(url,'');
      if (target == '#') {
        return;
      }
      $.facebox.reveal($(target).html(), klass);
    }
  }

  function skipOverlay() {
    return $.facebox.settings.overlay == false || $.facebox.settings.opacity === null;
  }

  function showOverlay() {
    if (skipOverlay()) {
      return;
    }

    if ($('.facebox-overlay').length == 0) {
      $("body").append('<div class="facebox-overlay facebox-overlay-hide"></div>');
    }

    $('.facebox-overlay')
      .hide()
      .addClass("facebox-overlay-active")
      .css('opacity', $.facebox.settings.opacity)
      .click(function() { $(document).trigger('facebox:close') })
      .fadeIn(200);

    return false;
  }

  function hideOverlay() {
    if (skipOverlay()) {
      return;
    }

    $('.facebox-overlay').fadeOut(200, function(){
      $(".facebox-overlay").removeClass("facebox-overlay-active");
      $(".facebox-overlay").addClass("facebox-overlay-hide");
      $(".facebox-overlay").remove();
    })

    return false;
  }

  /*
   * Bindings
   */

  $(document).bind('facebox:close', function() {
    $(document).unbind('keydown.facebox');
    $('.facebox').fadeOut(function() {
      $('.facebox-content').removeClass().addClass('facebox-content');
      $('.facebox-loading').remove();
      $(document).trigger('facebox:afterClose');
    });
    hideOverlay();
  });

  $(document).on("click", ".js-facebox-close", $.facebox.close);
})(jQuery);
