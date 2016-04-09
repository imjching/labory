class ClassroomInvitationsController < ApplicationController
  # layout 'layouts/invitations'
  layout 'layouts/pages'

  before_action :check_link_still_valid
  before_action :check_user_not_previous_acceptee, only: [:show]

  def accept_invitation
    users_classroom_access = invitation.redeem_for(current_user)

    if users_classroom_access.present?
      redirect_to successful_invitation_classroom_invitation_path
    else
      flash[:error] = 'An error has occured, please refresh the page and try again.'
      redirect_to :show
    end
  end

  def show

  end

  def successful_invitation
    not_found unless classroom_access
  end

  private

  def classroom
    @classroom ||= invitation.classroom
  end
  helper_method :classroom

  def classroom_access
    @classroom_access = ClassroomAccess.find_by(classroom: classroom, user: current_user)
    return @classroom_access if @classroom_access.present?
  end
  helper_method :classroom_access

  def invitation
    @invitation ||= ClassroomInvitation.find_by!(key: params[:id])
  end
  helper_method :invitation

  def check_link_still_valid
    not_found if invitation.expired?
  end

  def check_user_not_previous_acceptee # or admin
    return unless classroom.users.include?(current_user)
    redirect_to successful_invitation_classroom_invitation_path
  end
end
