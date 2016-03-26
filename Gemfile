source 'https://rubygems.org'

#ruby '2.3.0'
gem 'rails', '4.2.5.1'

gem 'autoprefixer-rails' # add vendor prefixes to CSS rules

gem 'chewy' # elasticsearch-ruby client
gem 'coffee-rails', '~> 4.1.0' # CoffeeScript for .coffee assets and views

gem 'draper' # decorators

gem 'faraday-http-cache' # Faraday middleware that respects HTTP cache

gem 'geo_pattern' # generates geometric background images from a string

gem 'jbuilder' # build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jquery-rails' # Use jquery as the JavaScript library
gem 'jquery-turbolinks' # turbolinks with jquery
gem 'jquery-ui-rails' # for draggable lists

gem 'kaminari' # pagination

gem 'local_time'

gem 'nprogress-rails' # progress bar

gem 'octokit' # ruby toolkit for the GitHub API
gem 'omniauth' # authentication system
gem 'omniauth-github'

gem 'peek' # profiling tool built by GitHub
gem 'peek-dalli' # memcached
gem 'peek-gc' # GC::Profiler
gem 'peek-git' # git
gem 'peek-performance_bar' # window.performance timing
gem 'peek-pg' # postgresql
gem 'peek-sidekiq', github: 'Soliah/peek-sidekiq', ref: '261c857578ae6dc189506a35194785a4db51e54c' # sidekiq
gem 'pg' # Use postgresql as the database for Active Record
gem 'puma' # web server
gem 'pygments.rb'

gem 'rack-canonical-host' # Rack middleware for defining a canonical host name.
gem 'ranked-model' # sortable
gem 'redcarpet'
gem 'redis-namespace'
gem 'rouge'

gem 'sass-rails', '~> 5.0' # Use SCSS for stylesheets
gem 'sidekiq', '~> 4.1.0' # background processing
gem 'sinatra', require: false # for sidekiq web

gem 'turbolinks' # Turbolinks makes following links in your web application faster.

gem 'uglifier', '>= 1.3.0' # Use Uglifier as compressor for JavaScript assets

group :development do
  gem 'better_errors'
  gem 'binding_of_caller'
  # gem 'capistrano-rails' # Use Capistrano for deployment
  gem 'foreman', require: false
  gem 'meta_request' # rails panel
  gem 'quiet_assets' # Suppress asset pipeline calls in logs
  gem 'web-console', '~> 2.0' # Access an IRB console on exception pages or by using <%= console %> in views
end

group :development, :test do
  gem 'awesome_print', require: 'ap'
  gem 'bullet' # helps to kill N+1 queries
  gem 'dotenv-rails'
  gem 'pry-rails'
  gem 'pry-byebug'
  gem 'rubocop', require: false
  gem 'scss_lint', require: false
  gem 'spring' # Spring speeds up development by keeping your application running in the background
end

group :production do
  gem 'dalli' # memcached
  gem 'pinglish' # checking application health
  gem 'puma_worker_killer' # Automatically restart Puma cluster workers based on max RAM available
  gem 'rack-tracker' # tracking and analytics
  gem 'rails_12factor'
end
