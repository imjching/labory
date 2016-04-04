ready = ->
  $('.js-show-hide-btn').on 'click', (event) ->
    event.preventDefault();
    $(this).find('span').toggleClass('octicon-eye octicon-mute')
    $(this).closest('li').toggleClass('opacity-4')
    $.ajax(
      type: 'PUT'
      url: $(this).data('toggle-url')
      dataType: 'json'
    )

$(document).ready(ready)
