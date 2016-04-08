class CreateClassroomInvitations < ActiveRecord::Migration
  def change
    create_table :classroom_invitations do |t|
      t.string :key, null: false
      t.belongs_to :classroom, index: true

      t.timestamps null: false
    end

    add_index :classroom_invitations, :key, unique: true

    add_column :classroom_invitations, :generated_at, :datetime
    add_index  :classroom_invitations, :generated_at
  end
end
