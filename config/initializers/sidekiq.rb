# Be sure to restart your server when you modify this file.

redis_config = { url: "redis://#{ENV['REDIS_PORT_6379_TCP_ADDR']}:#{ENV['REDIS_PORT_6379_TCP_PORT']}", namespace: 'sidekiq' }

Sidekiq.configure_server do |config|
  # Add chewy middleware from lib/sidekiq/chewy_middleware.rb
  config.server_middleware do |chain|
    chain.add Sidekiq::ChewyMiddleware, :atomic
  end

  config.redis = redis_config
end

Sidekiq.configure_client do |config|
  config.redis = redis_config
end
