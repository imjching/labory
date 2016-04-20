class AllowNullForRepoId < ActiveRecord::Migration
  def change
    remove_index :solutions, :github_repo_id
    change_column :solutions, :github_repo_id, :integer, null: true
    add_index :solutions, :github_repo_id
  end
end
