class CreateClassroomsCourses < ActiveRecord::Migration
  def change
    create_table :classrooms_courses do |t|
      t.belongs_to :classroom, index: true
      t.belongs_to :course, index: true
    end
  end
end
