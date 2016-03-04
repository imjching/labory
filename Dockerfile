# Choose the official Ruby 2.3.0 image as our starting point
FROM ruby:2.3.0

# Run updates for nokogiri and JS runtime
RUN apt-get update -qq && apt-get install -y build-essential libxml2-dev libxslt1-dev nodejs

# Cleanup
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Set up working directory
RUN mkdir /app

# Set up bundle environment
ENV BUNDLE_JOBS=3 BUNDLE_GEMFILE=/app/Gemfile

WORKDIR /app
