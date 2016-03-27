(function ($) {
        function init(settings) {
            if ($.facebox.settings.inited) return true
            else $.facebox.settings.inited = true

            $(document).trigger('init.facebox')
            // makeCompatible()

            // var imageTypes = $.facebox.settings.imageTypes.join('|')
            // $.facebox.settings.imageTypesRegexp = new RegExp('\\.(' + imageTypes + ')(\\?.*)?$', 'i')

            // if (settings) $.extend($.facebox.settings, settings)
            // $('body').append($.facebox.settings.faceboxHtml)

            // var preload = [ new Image(), new Image() ]
            // preload[0].src = $.facebox.settings.closeImage
            // preload[1].src = $.facebox.settings.loadingImage

            // $('#facebox').find('.b:first, .bl').each(function() {
            //   preload.push(new Image())
            //   preload.slice(-1).src = $(this).css('background-image').replace(/url\((.+)\)/, '$1')
            // })

            // $('#facebox .close')
            //   .click($.facebox.close)
            //   .append('<img src="'
            //           + $.facebox.settings.closeImage
            //           + '" class="close_image" title="close">')

            //return(settings && $.extend($.facebox.settings, settings)))
        }

        function getPageScroll() {
            var xScroll, yScroll;
            if (self.pageYOffset) {
                yScroll = self.pageYOffset;
                xScroll = self.pageXOffset;
            } else if (document.documentElement && document.documentElement.scrollTop) {     // Explorer 6 Strict
                yScroll = document.documentElement.scrollTop;
                xScroll = document.documentElement.scrollLeft;
            } else if (document.body) {// all other Explorers
                yScroll = document.body.scrollTop;
                xScroll = document.body.scrollLeft;
            }
            return new Array(xScroll,yScroll);
        }

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

        function fillFaceboxFromHref(href, klass) {
            // div
            if (href.match(/#/)) {
                var url    = window.location.href.split('#')[0]
                var target = href.replace(url,'')
                if (target == '#') return
                $.facebox.reveal($(target).html(), klass)
            }
        }

        function skipOverlay() {
            return $.facebox.settings.overlay == false || $.facebox.settings.opacity === null
        }

        function showOverlay() {
            if (skipOverlay()) return

            if ($('.facebox-overlay').length == 0)
                $("body").append('<div class="facebox-overlay facebox-overlay-hide"></div>')

            $('.facebox-overlay').hide().addClass("facebox-overlay-active")
                .css('opacity', $.facebox.settings.opacity)
                .click(function() { $(document).trigger('facebox:close') })
                .fadeIn(200)

            return false;
        }

        function hideOverlay() {
            if (skipOverlay()) return

            $('.facebox-overlay').fadeOut(200, function(){
                $(".facebox-overlay").removeClass("facebox-overlay-active")
                $(".facebox-overlay").addClass("facebox-overlay-hide")
                $(".facebox-overlay").remove()
            })

            return false;
        }

        $.facebox = function(data, klass) {
            $.facebox.loading()

            $(document).one("facebox:reveal", function() {
                // r($(".facebox-content")[0])
            });

            if (data.div) fillFaceboxFromHref(data.div, klass)
            else if ($.isFunction(data)) data.call($)
            else $.facebox.reveal(data, klass)
        };


        // $.facebox = function(data, klass) {
        //     return $.facebox.loading(), new Promise(function(r) {
        //         $(document).one("facebox:reveal", function() {
        //             r($(".facebox-content")[0])
        //         }),

        //
        //     })
        // };
        $.extend($.facebox, {
            settings: {
                opacity: 0.5,
                overlay: true
            },

            loading: function() {
                init()
                if ($('.facebox-loading').length == 1) return true
                showOverlay()

                $('.facebox-content').empty().
                    append('<div class="facebox-loading"></div>')

                $('#facebox').show().css({
                    top:    getPageScroll()[1] + (getPageHeight() / 10),
                    left:   $(window).width() / 2 - ($('.facebox-popup').outerWidth() / 2)
                })

                $(document).bind('keydown.facebox', function(e) {
                    if (e.keyCode == 27) $.facebox.close()
                    return true
                })
                $(document).trigger('facebox:loading')
            },

            reveal: function(data, klass) {
                $(document).trigger('beforeReveal.facebox')
                if (klass) $('.facebox-content').addClass(klass)
                $('.facebox-content').empty().append(data)
                $('.facebox-loading').remove();
                $('.facebox-popup').children().fadeIn('normal')
                $('.facebox').css('left', $(window).width() / 2 - ($('.facebox-popup').outerWidth() / 2))
                $(".facebox-header").attr("tabindex", "-1")
                $(".facebox-content [data-facebox-id]").each(function() {
                    $(this).attr("id", $(this).attr("data-facebox-id"))
                });
                $(".facebox .facebox-header").focus();
                $(document).trigger('facebox:reveal').trigger('afterReveal.facebox')
            },

            close: function() {
                $(document).trigger('facebox:close')
                return false
            }
        });

        $.fn.facebox = function(settings) {
            if ($(this).length == 0) return

            init(settings)

            function clickHandler(e) {
                e.preventDefault();
                $.facebox.loading(true)

              // support for rel="facebox.inline_popup" syntax, to add a class
              // also supports deprecated "facebox[.inline_popup]" syntax
              var klass = this.rel.match(/facebox\[?\.(\w+)\]?/)
              if (klass) klass = klass[1]

              fillFaceboxFromHref(this.href, klass)
              return false
            }

            return this.bind('click.facebox', clickHandler)
        };

        $(document).bind('facebox:close', function() {
            $(document).unbind('keydown.facebox')
            $('.facebox').fadeOut(function() {
              $('.facebox-content').removeClass().addClass('facebox-content')
              $('.facebox-loading').remove()
              $(document).trigger('facebox:afterClose')
            })
            hideOverlay()
          });


    $(document).on("click", ".js-facebox-close", $.facebox.close);
})(jQuery);