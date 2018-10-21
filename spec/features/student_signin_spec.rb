require 'rails_helper'

RSpec.describe 'Logging in a student', type: :feature, js:true do
  context "with an existing student" do
    let!(:student) {create(:student)}
    
    before do
      visit '/students/login'
    end
    
    it 'signs in with valid credentials' do
      within('.new_student') do
        fill_in 'Email', with: student.email
        fill_in 'Password', with: student.password
        click_button 'Log in'
      end
      expect(page).to have_content("Hello React!")
      expect(page).to have_current_path(root_path)
      expect(page.driver.browser.manage.cookie_named('student_id')).to_not eq(nil)
      expect(page.driver.browser.manage.cookie_named('is_signed_in')).to_not eq(nil)
    end
    
    it 'does not sign in without valid credentials' do
      within('.new_student') do
        fill_in 'Email', with: student.email
        fill_in 'Password', with: 'fake_password'
        click_button 'Log in'
      end
      expect(page).to have_no_content("Hello React!")
      expect(page).to have_current_path(new_student_session_path)
      
      expect(page.driver.browser.manage.cookie_named('student_id')).to eq(nil)
      expect(page.driver.browser.manage.cookie_named('is_signed_in')).to eq(nil)
    end
    
  end
end