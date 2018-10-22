require 'rails_helper'

RSpec.describe 'Confirming a registered club', type: :feature, js: true do
  context "with no users" do
    describe "confirming a user" do

      before do
        visit '/clubs/signup/sign_up'
        within('.new_club') do
          fill_in 'Email', with: 'club@example.com'
          fill_in 'Password', with: 'password'
          fill_in 'Password confirmation', with: 'password'
          fill_in 'Name', with: 'Example club'
          fill_in 'Description', with: 'Example description'
          fill_in 'Website url', with: 'club.com'
          click_button 'Sign up'
        end
      end

      it 'creates an unconfirmed club' do
        club = Club.first
        expect(Club.count).to eq(1)
        expect(club.email).to eq('club@example.com')
        expect(club.confirmed_at).to eq(nil)
      end

      it 'sends a confirmation email to the club' do
        expect(ActionMailer::Base.deliveries.count).to eq(1)
        email = ActionMailer::Base.deliveries.first
        expect(email).to deliver_to('club@example.com')
        expect(email).to deliver_from('support@bearcrawl.com')
        expect(email).to have_subject('Confirmation instructions')
      end

      it 'confirms the club properly' do
        email = ActionMailer::Base.deliveries.first
        visit(links_in_email(email)[0].gsub("http://localhost:3000", ""))
        sleep(inspection_time=0.5)
        #temporary
        expect(page).to have_content('Hello React')
        expect(page.driver.browser.manage.cookie_named('club_id')).to_not eq(nil)
        expect(page.driver.browser.manage.cookie_named('is_signed_in')).to_not eq(nil)
      end

      it 'attempts to confirm the club with the wrong confirmation token' do
        visit '/clubs/confirmation?confirmation_token=faketoken'
        expect(page).to have_content('Hello React')
        expect(page.driver.browser.manage.cookie_named('club_id')).to eq(nil)
        expect(page.driver.browser.manage.cookie_named('is_signed_in')).to eq(nil)
      end
    end
  end
end