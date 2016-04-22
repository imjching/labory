$('.stafftools.courses.new, .stafftools.courses.edit').ready ->
  $('form').on('change keyup', ->
    $submit_button = $('#course_submit')

    if $form_values_present()
      $submit_button.prop('disabled', false)
    else
      $submit_button.prop('disabled', true)
  )

$form_values_present = () ->
  $present('course_title')

$present = (id) ->
  $el = $("##{id}")

  if $el.length != 0
    return $el.val().length != 0

  false
