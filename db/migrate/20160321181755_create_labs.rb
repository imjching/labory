class CreateLabs < ActiveRecord::Migration
  def change
    create_table :labs do |t|
      t.string :title
      t.text :body

      t.belongs_to :course, index: true

      t.timestamps null: false
    end
  end
end
