# Be sure to restart your server when you modify this file.

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, Rails.application.secrets.github_client_id,
                    Rails.application.secrets.github_client_secret,
                    scope: 'user,public_repo,delete_repo,gist'
end
