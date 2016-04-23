ready = ->
  # if $('#sortable').length > 0
  #   table_width = $('#sortable').width()
  #   cells = $('.table').find('tr')[0].cells.length
  #   desired_width = table_width / cells + 'px'
  #   $('.table td').css('width', desired_width)
  $('a[rel*=facebox]').facebox()

  $(document).on('click', '[data-facebox]', ->
    $.facebox({
      div: this.getAttribute("data-facebox")
    }, this.getAttribute("data-facebox-class"))
  )

  $('#toggle_peek').on 'click', (event) ->
    wrapper = $('#peek')
    if wrapper.hasClass 'disabled'
      wrapper.slideDown 300, ->
        wrapper.removeClass 'disabled'
      document.cookie = "peek=true; path=/"
    else
      wrapper.slideUp 300, ->
        wrapper.addClass 'disabled'
      document.cookie = "peek=false; path=/"

  $('#sortable').sortable(
    handle: '.handle'
    axis: 'y'
    items: '.table-list-item'
    distance: 5
    delay: 300
    opacity: 0.6
    cursor: 'grabbing'

    sort: (e, ui) ->
      ui.item.addClass('active-item-shadow')
    stop: (e, ui) ->
      ui.item.removeClass('active-item-shadow')
      # highlight the row on drop to indicate an update
      ui.item.children('div').effect('highlight', {}, 1000)
    update: (e, ui) ->
      console.log(ui.item.index())
      position = ui.item.index() # this will not work with paginated items, as the index is zero on every page
      $.ajax(
        type: 'PUT'
        url: ui.item.data('sort-url')
        dataType: 'json'
        data: { sortable: { sort_order_position: position } }
      )
  )

$(document).ready(ready)
