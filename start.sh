#!/bin/bash

bundle check || bundle install

rm -f /app/tmp/pids/server.pid

rails s -b 0.0.0.0