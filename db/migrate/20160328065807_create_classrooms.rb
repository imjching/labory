class CreateClassrooms < ActiveRecord::Migration
  def change
    create_table :classrooms do |t|
      t.string :title, null: false
      t.string :slug, null: false

      t.timestamps null: false
    end

    add_index :classrooms, :slug
  end
end
