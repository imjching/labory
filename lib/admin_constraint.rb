class AdminConstraint
  def matches?(request)
    # return false unless request.session[:user_id]
    # user = User.find(request.session[:user_id])
    # user && user.staff?
    return true
  end
end
