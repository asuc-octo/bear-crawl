require 'rails_helper'

RSpec.describe 'Logging in a club', type: :feature, js: true do
  context "with an existing club" do
    let!(:club) {create(:club)}

    before do
      visit '/clubs/login'
    end

    it 'signs in with valid credentials' do
      within('.new_club') do
        fill_in 'Email', with: club.email
        fill_in 'Password', with: club.password
        click_button 'Log in'
      end
      expect(page).to have_content("Hello React!")
      expect(page).to have_current_path(root_path)
      expect(page.driver.browser.manage.cookie_named('club_id')).to_not eq(nil)
      expect(page.driver.browser.manage.cookie_named('is_signed_in')).to_not eq(nil)
    end

    it 'signs in with invalid credentials' do
      within('.new_club') do
        fill_in 'Email', with: club.email
        fill_in 'Password', with: 'fake_password'
        click_button 'Log in'
      end
      expect(page).to have_no_content("Hello React!")
      expect(page).to have_current_path(new_club_session_path)

      expect(page.driver.browser.manage.cookie_named('club_id')).to eq(nil)
      expect(page.driver.browser.manage.cookie_named('is_signed_in')).to eq(nil)
    end
  end
end