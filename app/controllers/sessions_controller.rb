class SessionsController < ApplicationController
  skip_before_action :authenticate_user!

  def new
    scopes = session[:required_scopes] || default_required_scopes
    scope_param = { scope: scopes }.to_param
    redirect_to "/auth/github?#{scope_param}"
  end

  def default_required_scopes
    'user,public_repo,delete_repo,gist'
  end

  # rubocop:disable AbcSize
  def create
    auth_hash = request.env['omniauth.auth']
    user      = User.find_by_auth_hash(auth_hash) || User.new

    user.assign_from_auth_hash(auth_hash)

    session[:user_id] = user.id

    url = session[:pre_login_destination] || dashboard_path

    session[:current_scopes] = user.github_client_scopes

    redirect_to url
  end
  # rubocop:enable AbcSize

  def destroy
    reset_session
    redirect_to root_path
  end

  def failure
    redirect_to root_path, alert: params[:message]
  end
end
