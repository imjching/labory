$(document).ready(function() {
  $(document).on("focusin", ".js-write-bucket", function() {
    return $(this).addClass("focused")
  }), $(document).on("focusout", ".js-write-bucket", function() {
    return $(this).removeClass("focused")
  });

  toggleTab = function(e) {
    var form = e.closest(".js-previewable-comment-form");
    var isPreview = e.hasClass("js-preview-tab");
    if (isPreview) {
      var writeBucket = form.find(".js-write-bucket");
      var previewBody = form.find(".js-preview-body");
      previewBody.css('minHeight', writeBucket.height() + "px");
    }
    form.toggleClass("preview-selected", isPreview);
    form.toggleClass("write-selected", !isPreview);

    var selected = form.find(".tabnav-tab.selected");
    selected.attr("aria-selected", false).removeClass("selected");

    e.addClass("selected").attr("aria-selected", true);
  };

  var options = {
    callback: function (value) {
      var form = $(this).closest(".js-previewable-comment-form");
      var comment = form.find('.js-comment-field');
      var preview = form.find('.comment-body');

      if (comment.val().trim() === "") {
        preview.html('<p>Nothing to preview</p>');
      } else {
        preview.html('<p>Loading preview&hellip;</p>');
        $.ajax({
          type: 'POST',
          url: form.data('preview-url'),
          dataType: 'json',
          data: {
            text: comment.val()
          }
        }).done(function(data) {
          preview.html(data.markdown);
        }).fail(function(data) {
          preview.html('<p>Failed to load preview</p>');
        });
      }
      // console.log('TypeWatch callback: (' + (this.type || this.nodeName) + ') ' + value);
    },
    wait: 500,
    highlight: true,
    allowSubmit: false,
    captureLength: 1
  };

  $(".js-write-bucket textarea").typeWatch(options);


  $(document).on("click", ".js-write-tab", function(e) {
    toggleTab($(this));
    $(".js-comment-field").focus();
  });

  $(document).on("click", ".js-preview-tab", function(e) {
    toggleTab($(this));
  });
});