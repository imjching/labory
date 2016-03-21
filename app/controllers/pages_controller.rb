class PagesController < ApplicationController
  layout :resolve_layout

  skip_before_action :authenticate_user!, only: [:home]

  def home
    redirect_to dashboard_path if logged_in?
  end

  def dashboard

  end

  private

  def resolve_layout
    case action_name
    when 'home'
      'layouts/pages'
    else
      'layouts/app'
    end
  end
end
