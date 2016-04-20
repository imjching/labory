class RemoveLinkFromSolutions < ActiveRecord::Migration
  def change
    remove_column :solutions, :link
  end
end
