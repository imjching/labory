# Choose the official Ruby 2.3.0 image as our starting point
FROM ruby:2.3.0

# Run updates for nokogiri and JS runtime
RUN apt-get update -qq && apt-get install -y build-essential libxml2-dev libxslt1-dev nodejs

# Cleanup
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Set up working directory
RUN mkdir /app

WORKDIR /tmp
# Copy Gemfiles
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock

# Set up bundle environment
ENV BUNDLE_GEMFILE=/tmp/Gemfile
ENV BUNDLE_JOBS=2
ENV BUNDLE_PATH=/bundle

# Install gems
RUN bundle install

WORKDIR /app

# Start the server
CMD ["rails", "server", "-b", "0.0.0.0"]

# docker-compose run --rm web bundle install
# docker-compose run --rm web rake db:create
# docker-compose run --rm web rake db:migrate