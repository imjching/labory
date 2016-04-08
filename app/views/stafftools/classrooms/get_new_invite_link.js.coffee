<% if @invitation.present? %>
ready = (container) ->
  container
    # replace and highlight duration
    .find('#duration_field')
      .html('<%= time_ago_in_words(@invitation.generated_at + 3.hours) %>')
      .effect('highlight', {}, 1000)
      .end()
    # replace and highlight link
    .find('.form-group input')
      .attr('value', '<%= classroom_invitation_url(@invitation) %>')
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