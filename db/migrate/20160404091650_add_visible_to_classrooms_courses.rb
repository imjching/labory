class AddVisibleToClassroomsCourses < ActiveRecord::Migration
  def change
    add_column :classrooms_courses, :visible, :boolean, null: false, default: false
  end
end
