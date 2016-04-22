class Solution < ActiveRecord::Base

  include GitHubRepoable

  default_scope { order('created_at DESC') }

  belongs_to :lab
  belongs_to :user
  belongs_to :classroom

  enum status: [ :attempted, :completed ] #lowest level first

  # validates :github_repo_id, presence:   true
  # validates :github_repo_id, uniqueness: true

  before_validation(on: :create) do
    if fork_repo_id # fork github repo
      fork_github_repository
      edit_github_repository # name, issues, wiki, downloads
    elsif starter_code_repo_id # create and copy github repo
      create_github_repository
      push_starter_code_repo
    elsif fork_gist_hash # fork github gist
      fork_github_gist
      edit_github_gist # name, description, set private
    elsif starter_code_gist_hash # create and copy github gist
      create_github_gist(starter_code_gist_hash)
    else # none
      create_github_gist
    end
  end

  # before_destroy :silently_destroy_github_repository # dangerous

  def repo_name
    "#{lab.title.parameterize}-#{SecureRandom.hex(4)}"
  end

  def fork_repo_id
    lab.fork_repo_id
    # 34972025
  end

  def starter_code_repo_id
    lab.starter_code_repo_id
  end

  def fork_gist_hash
    lab.fork_gist_hash
  end

  def starter_code_gist_hash
    lab.starter_code_gist_hash
  end

end