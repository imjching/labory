class AddSlugs < ActiveRecord::Migration
  def change
    add_column :courses, :slug, :string, null: false
    add_index  :courses, :slug
  end
end
