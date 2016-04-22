<% if @access.present? %>
  $(document).trigger('facebox:close')
  $("li[data-user-id=<%= @access.user_id %>]").fadeOut("slow").remove()

  $new = parseInt($('.class_size').html()) - 1
  $('.class_size').html($new.toString())
<% else %>
  $.facebox({ div: '#bad_request' })
<% end %>