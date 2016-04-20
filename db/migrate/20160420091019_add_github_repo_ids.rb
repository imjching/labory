class AddGithubRepoIds < ActiveRecord::Migration
  def change
    add_column :labs, :fork_repo_id, :integer
    add_column :labs, :starter_code_repo_id, :integer

    add_column :solutions, :github_repo_id, :integer, null: false
    add_index :solutions, :github_repo_id, unique: true
  end
end