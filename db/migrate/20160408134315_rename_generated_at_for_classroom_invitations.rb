class RenameGeneratedAtForClassroomInvitations < ActiveRecord::Migration
  def change
    rename_column :classroom_invitations, :generated_at, :expired_at
  end
end
