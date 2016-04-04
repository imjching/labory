class AddTimestampsToClassroomsCourses < ActiveRecord::Migration
  def change
    add_timestamps :classrooms_courses
  end
end
