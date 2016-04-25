require 'capybara/dsl'
require 'capybara-webkit'

require 'capybara_minitest_spec'
require "test/unit"

Capybara.default_driver = :webkit

Capybara::Webkit.configure do |config|
  config.allow_unknown_urls
end
require_relative './dropdowns_test'
require_relative './rolldowns_test'
