<% if @invite.present? %>
ready = (container) ->
  container
    # replace and highlight duration
    .find('#duration_field')
      .html('2 hours 59 minutes')
      .effect('highlight', {}, 1000)
      .end()
    # replace and highlight link
    .find('.form-group #clipboard_field')
      .attr('value', 'https://docker-vm/join/asbcdsfaf')
      .effect('highlight', {}, 1000)
      .end()
    # highlight button
    .find('button')
      .effect('highlight', {}, 1000)
      .end()
    # remove fade
    .find('.form-group')
      .removeClass('loading')
      .end()
    # re-enable button
    .find('form input[type=submit]')
      .attr('value', 'Generate a new link')
      .prop('disabled', false)
      .end()
ready($('#facebox'))
ready($('#invite_members'))
<% else %>
$.facebox({ div: '#bad_request' });
<% end %>