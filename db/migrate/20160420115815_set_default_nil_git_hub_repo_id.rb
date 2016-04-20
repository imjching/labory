class SetDefaultNilGitHubRepoId < ActiveRecord::Migration
  def change
    change_column_default(:solutions, :github_repo_id, nil)
  end
end
