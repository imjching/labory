class AddSortOrderToLabs < ActiveRecord::Migration
  def change
    add_column :labs, :sort_order, :integer, null: false, default: 0

    add_index :labs, :sort_order
  end
end
