class RemoveIntegerColumnFromSolutions < ActiveRecord::Migration
  def change
    remove_column :solutions, :integer
  end
end
