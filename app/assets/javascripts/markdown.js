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

  $(document).on("click", ".js-write-tab", function(e) {
    toggleTab($(this));
    $(".js-comment-field").focus();
  });

  $(document).on("click", ".js-preview-tab", function(e) {
    toggleTab($(this));
  });
});