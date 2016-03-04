# Be sure to restart your server when you modify this file.

# Allow usage on Vagrant or docker-machine
if defined?(BetterErrors)
  # Opening files
  BetterErrors.editor = proc { |full_path, line|
    full_path = full_path.sub(Rails.root.to_s, ENV['VM_HOST_PATH'])
    "subl://open?url=file://#{full_path}&line=#{line}"
  }

  # Allowing host
  BetterErrors::Middleware.allow_ip! '0.0.0.0/0' if [:development, :test].member?(Rails.env.to_sym)
end
