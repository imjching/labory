class CreateClassroomAccesses < ActiveRecord::Migration
  def change
    create_table :classroom_accesses do |t|
      t.belongs_to :classroom, index: true
      t.belongs_to :user, index: true
      t.integer :role, :integer, default: 0
      t.timestamps null: false
    end
  end
end
