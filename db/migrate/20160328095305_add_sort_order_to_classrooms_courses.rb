class AddSortOrderToClassroomsCourses < ActiveRecord::Migration
  def change
    add_column :classrooms_courses, :sort_order, :integer, null: false, default: 0

    add_index :classrooms_courses, :sort_order
  end
end
