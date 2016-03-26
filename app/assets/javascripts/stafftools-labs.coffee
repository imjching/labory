$('.stafftools.labs.new').ready ->
  $('form').on('change keyup', ->
    $submit_button = $('#lab_submit')

    if $form_values_present()
      $submit_button.prop('disabled', false)
    else
      $submit_button.prop('disabled', true)
  )

$form_values_present = () ->
  $present('lab_title') && $present('lab_body')

$present = (id) ->
  $el = $("##{id}")

  if $el.length != 0
    return $el.val().length != 0

  false
