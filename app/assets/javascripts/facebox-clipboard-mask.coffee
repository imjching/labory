# $(document).bind 'facebox:afterReveal', ->
#   $field = $('#facebox #clipboard_field')
#   if $field.length != 0 # clipboard exists
#     $btn = $field.parent().find('span button')
#     if $btn.length != 0 # button exists
#       $btn.attr('data-clipboard-target', '#clipboard_field_')
#       $field.attr('id', 'clipboard_field_')

$('.classrooms.show').ready ->
  $(document).bind 'facebox:afterReveal', ->
    $(document).trigger('clipboardjs:init')

    $('#facebox #new_invite_link_form').submit ->

      $('#facebox')
        .find('form input[type=submit]') # submit button
          .attr('value', 'Generating...')
          .prop('disabled', true)
          .end()
        .find('.form-group') # fade the form
          .addClass('loading')
          .end()

    $('#facebox #remove_member_form').submit ->

      $('#facebox')
        .find('form input[type=submit]') # submit button
          .attr('value', 'Removing...')
          .prop('disabled', true)
          .end()
        .find('.form-group') # fade the form
          .addClass('loading')
          .end()
