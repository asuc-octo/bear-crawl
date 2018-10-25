require 'rails_helper' 

RSpec.describe "Resetting a password", type: :feature, js:true do
  context "with an existing club" do
    let!(:club) {create(:club)}

    before do
      visit new_club_password_path
      fill_in 'Email', with: club.email
      click_on 'Send me reset password instructions'
      sleep(inspection_time=0.5)
      visit(links_in_email(ActionMailer::Base.deliveries.first)[0].gsub("http://localhost:3000", ""))
    end
    
    it 'does not reset password with wrong token' do
      visit '/clubs/password/edit?reset_password_token=faketoken'
      expect(page).to have_content 'Hello React'
      expect(page.driver.browser.manage.cookie_named('club_id')).to eq(nil)
      expect(page.driver.browser.manage.cookie_named('is_signed_in')).to eq(nil)
    end

    it 'does not update non-matching passwords' do
      fill_in "New password", with: 'password'
      fill_in "Confirm new password", with: 'invalid'
      click_on 'Change my password'
      
      expect(page).to have_content 'Forgot your password'
      expect(page).to_not have_content 'Hello React'
      expect(page.driver.browser.manage.cookie_named('club_id')).to eq(nil)
      expect(page.driver.browser.manage.cookie_named('is_signed_in')).to eq(nil)
    end
    
    it 'updates club password' do
      fill_in "New password", with: 'newpassword'
      fill_in "Confirm new password", with: 'newpassword'
      click_on 'Change my password'
      
      expect(page).to have_current_path root_path
      
      expect(page.driver.browser.manage.cookie_named('club_id')).to_not eq(nil)
      expect(page.driver.browser.manage.cookie_named('is_signed_in')).to_not eq(nil)
    end
  end
end