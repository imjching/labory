class AddClassroomIdToSolutions < ActiveRecord::Migration
  def change
    add_reference :solutions, :classroom, index: true
  end
end
