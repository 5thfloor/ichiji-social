require 'json'
require 'sidekiq'
require 'sidekiq/api'

def redis_url
  return ENV['REDIS_URL'] if ENV['REDIS_URL']

  password = ENV.fetch('REDIS_PASSWORD') { nil }
  host     = ENV.fetch('REDIS_HOST') { 'localhost' }
  port     = ENV.fetch('REDIS_PORT') { 6379 }
  db       = ENV.fetch('REDIS_DB') { 0 }
  "redis://#{password ? ":#{password}@" : ''}#{host}:#{port}/#{db}"
end

Sidekiq.configure_client do |config|
  config.redis = { url: redis_url }
end

module SidekiqMetrics
  class Web
    def call(_env)
      stats = Sidekiq::Stats.new
      response = {
        processed:       stats.processed,
        failed:          stats.failed,
        busy:            stats.workers_size,
        processes:       stats.processes_size,
        enqueued:        stats.enqueued,
        scheduled:       stats.scheduled_size,
        retries:         stats.retry_size,
        dead:            stats.dead_size,
        default_latency: stats.default_queue_latency,
      }.to_json
      [200, { 'Content-Type' => 'application/json' }, [response]]
    end
  end
end
