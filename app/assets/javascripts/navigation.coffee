ready = ->
  $('.js-navigation').on('click', -> $('.loading-indicator').show())

$(document).ready(ready)
