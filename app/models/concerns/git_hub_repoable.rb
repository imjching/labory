module GitHubRepoable
  extend ActiveSupport::Concern

  # Options:
  # 1. Create Repo -> Push
  # 2. Fork Repo
  # 3. Create Gist -> Push
  # 4. Fork Gist
  # 5. Create Empty Gist
  # To store "github_repo_id"

  # GitHub Repositories
  # ===================

  def create_github_repository
    repo_description = "#{repo_name} created by Classroom for GitHub"
    github_repository = github_user.create_repository(repo_name, description: repo_description)
    self.github_repo_id = github_repository.id
  end

  def destroy_github_repository
    github_user.delete_repository(github_repo_id)
  end

  def delete_github_repository_on_failure
    yield
  rescue GitHub::Error
    silently_destroy_github_repository
    raise GitHub::Error, 'Assignment failed to be created'
  end

  def silently_destroy_github_repository
    destroy_github_repository
    true # Destroy ActiveRecord object even if we fail to delete the repository
  end

  def push_starter_code_repo
    return true unless starter_code_repo_id # only used for push

    lab_repository          = GitHubRepository.new(user.github_client, github_repo_id)
    starter_code_repository = GitHubRepository.new(user.github_client, starter_code_repo_id)

    delete_github_repository_on_failure do
      lab_repository.get_starter_code_from(starter_code_repository)

      # Star the repo.....
      github_user.star(starter_code_repo_id)
    end
  end

  def fork_github_repository
    return true unless fork_repo_id # only used for fork

    github_repository = github_user.fork_repository(fork_repo_id)
    self.github_repo_id = github_repository.id

    # Star the repo.....
    github_user.star(fork_repo_id)
  end

  def edit_github_repository
    repo_description = "#{repo_name} created by Classroom for GitHub"
    github_user.edit_repository(github_repo_id, { name: repo_name, description: repo_description })
  end

  def html_url
    if github_gist_hash.present?
      GitHubGist.new(user.github_client, github_gist_hash).html_url
    elsif github_repo_id.present?
      GitHubRepository.new(user.github_client, github_repo_id).html_url
    else
      nil
    end
  end

  # GitHub Gists
  # ============

  def fork_github_gist
    return true unless fork_gist_hash

    gist = github_user.fork_gist(fork_gist_hash)
    self.github_gist_hash = gist.id

    # Star the gist.....
    github_user.star_gist(fork_gist_hash)
  end

  def edit_github_gist
    repo_description = "#{repo_name} created by Classroom for GitHub"
    github_user.edit_gist(github_gist_hash, { description: repo_description })
  end

  def create_github_gist(gist_hash = nil)
    repo_description = "#{repo_name} created by Classroom for GitHub"

    files = { "Untitled.txt": { content: "Untitled" } }
    if gist_hash.present?
      files = github_user.gist(gist_hash).files.to_h
    end

    github_gist = github_user.create_gist({ description: repo_description, files: files })
    self.github_gist_hash = github_gist.id
  end

  # Internal
  #
  def github_user
    @github_user ||= GitHubUser.new(user.github_client, user.uid)
  end
end
