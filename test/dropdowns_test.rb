class DropdownsTest < Test::Unit::TestCase
  include Capybara::DSL

  def setup
    Capybara.current_session.driver.visit 'file:///Users/sameer/Digital Strategies/clients/techpathways/code/brochure_site/app_main_page.html'
  end
  def test_dropdowns
    refute page.has_css?('.label-box', visible: true)
    page.find('#dd-1').click
    assert page.has_css?('.label-box', visible: true)
    
    page.find('#dd-1').click #closed
    page.find('#dd-1').click #open
    page.find('#dd-0').click #closed    
    refute page.has_css?('#dd-choice-1-0', visible: true)
    assert page.has_css?('#dd-choice-0-1', visible: true)
  end

  def test_chessboard
    #puts page.find_all('.org-box').count
    assert page.has_css?('.org-box', visible: true, count: 11)
    page.find('#dd-0').click
    page.find('#dd-choice-0-1').click
    page.find('#price-free').click

    free_youth_number = 9

    assert page.has_css?('.org-box', visible: true, count: free_youth_number)

    # test the behavior that broke because I didn't implement Angular correctly
    page.find('#price-dollar').click
    page.find('#price-show-all').click
    page.find('#price-free').click
    assert page.has_css?('.org-box', visible: true, count: free_youth_number)
  end
end
