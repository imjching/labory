class RemoveIntegerColumnFromClassroomAccesses < ActiveRecord::Migration
  def change
    remove_column :classroom_accesses, :integer
  end
end
