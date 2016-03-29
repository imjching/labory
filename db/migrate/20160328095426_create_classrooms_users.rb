class CreateClassroomsUsers < ActiveRecord::Migration
  def change
    create_table :classrooms_users do |t|
      t.belongs_to :classroom, index: true
      t.belongs_to :user, index: true
    end
  end
end
