$(document).bind 'facebox:afterReveal', ->
  $field = $('#facebox #clipboard_field')
  if $field.length != 0 # clipboard exists
    $btn = $field.parent().find('span button')
    if $btn.length != 0 # button exists
      $btn.attr('data-clipboard-target', '#clipboard_field_')
      $field.attr('id', 'clipboard_field_')
