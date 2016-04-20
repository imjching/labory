module GitHubRepoable
  extend ActiveSupport::Concern

  # Options:
  # 1. Create Repo -> Push
  # 2. Fork Repo
  # TODO
  # 3. Create Gist -> Push/Update
  # 4. Fork Gist
  # To store "github_repo_id" ////"starter_code_repo_id", "fork_repo_id"

  # Public
  #
  def create_github_repository
    repo_description = "#{repo_name} created by Classroom for GitHub"
    github_repository = github_user.create_repository(repo_name, description: repo_description)
    self.github_repo_id = github_repository.id
  end

  # Public
  #
  def destroy_github_repository
    github_user.delete_repository(github_repo_id)
  end

  # Public
  #
  def delete_github_repository_on_failure
    yield
  rescue GitHub::Error
    silently_destroy_github_repository
    raise GitHub::Error, 'Assignment failed to be created'
  end

  # Public
  #
  def silently_destroy_github_repository
    destroy_github_repository
    true # Destroy ActiveRecord object even if we fail to delete the repository
  end

  # Public
  #
  def push_starter_code
    return true unless starter_code_repo_id # only used for push

    lab_repository          = GitHubRepository.new(user.github_client, github_repo_id)
    starter_code_repository = GitHubRepository.new(user.github_client, starter_code_repo_id)

    delete_github_repository_on_failure do
      lab_repository.get_starter_code_from(starter_code_repository)

      # Star the repo.....
      github_user.star(starter_code_repo_id)
    end
  end

  # Public
  #
  def fork_github_repository
    return true unless fork_repo_id # only used for fork

    github_repository = github_user.fork_repository(fork_repo_id)
    self.github_repo_id = github_repository.id

    # Star the repo.....
    github_user.star(fork_repo_id)
  end

  # Public
  #
  def edit_github_repository
    repo_description = "#{repo_name} created by Classroom for GitHub"
    github_user.edit_repository(github_repo_id, { name: repo_name, description: repo_description })
  end

  # Internal
  #
  def github_user
    @github_user ||= GitHubUser.new(user.github_client, user.uid)
  end
end
