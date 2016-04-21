require 'capybara/dsl'
require 'capybara-webkit'

require 'capybara_minitest_spec'
require "test/unit"

Capybara.default_driver = :webkit

Capybara::Webkit.configure do |config|
  config.allow_unknown_urls
end

class Tester < Test::Unit::TestCase
  include Capybara::DSL

  def setup
    Capybara.current_session.driver.visit 'file:///Users/sameer/Digital Strategies/clients/techpathways/code/brochure_site/app_alpha.html'
  end
  def test_dropdowns
    refute page.has_css?('.label-box', visible: true)
    page.find('#dd-0').click
    assert page.has_css?('.label-box', visible: true)
    
    page.find('#dd-0').click #closed
    page.find('#dd-0').click #open
    page.find('#dd-1').click #closed    
    refute page.has_css?('#dd-choice-0-1', visible: true)
    assert page.has_css?('#dd-choice-1-1', visible: true)
  end

  def test_chessboard
    assert page.has_css?('.org-box', visible: true, count: 7)
    page.find('#dd-0').click
    page.find('#dd-choice-0-1').click
    page.find('#price-free').click

    assert page.has_css?('.org-box', visible: true, count: 5)

    # test the behavior that broke because I didn't implement Angular correctly
    page.find('#price-2-d').click
    page.find('#price-3-d').click
    page.find('#price-free').click
    assert page.has_css?('.org-box', visible: true, count: 5)
  end
end
