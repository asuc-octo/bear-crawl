require 'rails_helper'

RSpec.describe 'Registering a new student', type: :feature, js: true do
  context "with no clubs" do
    describe "creating a club" do
      before do
        visit '/clubs/signup/sign_up'
      end

      it 'creates the club' do
        within('.new_club') do
          fill_in 'Email', with: 'club@example.com'
          fill_in 'Password', with: 'password'
          fill_in 'Password confirmation', with: 'password'
          fill_in 'Name', with: 'Example club'
          fill_in 'Description', with: 'Example description'
          fill_in 'Website url', with: 'club.com'
          click_button 'Sign up'
        end

        club = Club.first
        expect(Club.count).to eq(1)
        expect(club.email).to eq('club@example.com')
        expect(club.name).to eq('Example club')
        expect(club.website_url).to eq('club.com')

        #Sent confirmation instructions
        expect(ActionMailer::Base.deliveries.count).to eq(1)

        #Temp show
        expect(page).to have_content('Hello React')
      end
    end
  end
end