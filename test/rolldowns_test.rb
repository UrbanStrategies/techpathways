class RolldownsTest < Test::Unit::TestCase
  include Capybara::DSL

  def setup
    Capybara.current_session.driver.visit 'file:///Users/sameer/Digital Strategies/clients/techpathways/code/brochure_site/app_main_page.html'
  end
  def test_rollers
    orgboxes = page.all('.org-result-box')
    refute orgboxes[0].has_css?('.rolldown')
    orgboxes[0].find('.negative').click
    assert orgboxes[0].has_css?('.rolldown')
  end
end
