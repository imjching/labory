class Solution < ActiveRecord::Base

  include GitHubRepoable

  belongs_to :lab
  belongs_to :user

  enum status: [ :attempted, :completed ] #lowest level first

  validates :github_repo_id, presence:   true
  validates :github_repo_id, uniqueness: true

  before_validation(on: :create) do
    if fork_repo_id
      fork_github_repository
      edit_github_repository # name, issues, wiki, downloads
    else
      create_github_repository
      push_starter_code
    end
  end

  before_destroy :silently_destroy_github_repository

  def repo_name
    "#{lab.title.parameterize}-#{SecureRandom.hex(1)}"
  end

  def starter_code_repo_id
    lab.starter_code_repo_id
  end

  def fork_repo_id
    lab.fork_repo_id
  end

end