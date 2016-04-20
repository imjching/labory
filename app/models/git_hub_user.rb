class GitHubUser
  include GitHub

  def initialize(client, id)
    @client = client
    @id     = id
  end

  def authorized_access_token?
    with_error_handling do
      application_github_client.check_application_authorization(@client.access_token,
                                                                headers: no_cache_headers).present?
    end
  rescue GitHub::NotFound
    false
  end

  def client_scopes
    with_error_handling { @client.scopes(@client.access_token, headers: no_cache_headers) }
  rescue GitHub::Forbidden
    []
  end

  # Public
  #
  def create_repository(repo_name, users_repo_options = {})
    repo_options = github_repo_default_options.merge(users_repo_options)

    repo = with_error_handling do
      @client.create_repository(repo_name, repo_options)
    end

    GitHubRepository.new(@client, repo.id)
  end

  # Public
  #
  def delete_repository(repo_id)
    @client.delete_repository(repo_id)
  end

  # Public
  #
  def fork_repository(fork_repo_id)
    repo = with_error_handling do
      @client.fork(fork_repo_id)
    end

    GitHubRepository.new(@client, repo.id)
  end

  # Public
  #
  def edit_repository(repo_id, users_repo_options = {})
    repo_options = github_repo_default_options.merge(users_repo_options)
    repo = Octokit::Repository.new(@client.repository(repo_id).full_name)

    with_error_handling { @client.edit_repository(repo, repo_options) }
  end

  # Public
  #
  def star(repo_id)
    repo = Octokit::Repository.new(@client.repository(repo_id).full_name)
    @client.star(repo)
  end

  # Public
  #
  def login(options = {})
    with_error_handling { @client.user(@id, options).login }
  end

  # Public
  #
  def user
    with_error_handling { @client.user(@id) }
  end

  private

  # Internal
  #
  def github_repo_default_options
    {
      has_issues:    true,
      has_wiki:      true,
      has_downloads: true,
    }
  end

end