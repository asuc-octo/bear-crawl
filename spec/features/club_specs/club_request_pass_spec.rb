require 'rails_helper' 

RSpec.describe "Requesting to reset password", type: :feature, js:true do
  context "with an existing club" do
    let!(:club) {create(:club)}

    before do
      visit new_club_password_path
    end

    it 'does not send email to incorrect email' do
      fill_in 'Email', with: "fakeemail@invalid.com"
      click_on 'Send me reset password instructions'
      expect(page).to have_content 'Forgot your password?'
      expect(page).to_not have_content 'Hello React'
      expect(ActionMailer::Base.deliveries.count).to eq(0)
    end

    it 'sends email with password reset instructions' do
      fill_in 'Email', with: club.email
      click_on 'Send me reset password instructions'
      sleep(inspection_time=0.5)
      
      expect(page).to_not have_content 'Forgot your password?'
      expect(page).to have_content 'Hello React'
      
      expect(ActionMailer::Base.deliveries.count).to eq(1)
      mail = ActionMailer::Base.deliveries.first
      expect(mail).to deliver_to club.email
    end
  end
end