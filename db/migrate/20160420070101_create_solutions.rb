class CreateSolutions < ActiveRecord::Migration
  def change
    create_table :solutions do |t|
      t.string :link, null: false
      t.belongs_to :lab, index: true
      t.belongs_to :user, index: true
      t.integer :status, default: 0
      t.timestamps null: false
    end
  end
end