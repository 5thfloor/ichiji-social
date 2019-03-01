require 'rack'
require_relative './sidekiq_metrics'

run SidekiqMetrics::Web.new
