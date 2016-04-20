class AddGitHubGists < ActiveRecord::Migration
   def change
    add_column :labs, :fork_gist_hash, :string
    add_column :labs, :starter_code_gist_hash, :string

    add_column :solutions, :github_gist_hash, :string
    add_index :solutions, :github_gist_hash
  end
end
