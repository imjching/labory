<% if @access.present? %>
  $(document).trigger('facebox:close')
  $("li[data-user-id=<%= @access.user_id %>]").fadeOut("slow").remove()
<% else %>
  $.facebox({ div: '#bad_request' })
<% end %>