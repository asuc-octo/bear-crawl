require 'rails_helper'

RSpec.describe 'Confirming a registered student', type: :feature, js: true do
  context "with no users" do
    describe "confirming a user" do
      
      before do
        visit '/students/signup/sign_up'
        within('.new_student') do
          fill_in 'Email', with: 'student@example.com'
          fill_in 'Username', with: 'student'
          fill_in 'Firstname', with: 'Demo'
          fill_in 'Lastname', with: 'Student'
          fill_in 'Year', with: 2021
          fill_in 'Major', with: 'Computer Science'
          fill_in 'Linkedin', with: 'https://www.linkedin.com/in/exampleuser'
          fill_in 'Facebook', with: 'https://www.facebook.com/exampleuser'
          fill_in 'Password', with: 'password'
          fill_in 'Password confirmation', with: 'password'
          click_button 'Sign up'
        end
      end
      
      it 'creates an unconfirmed student' do
        expect(Student.count).to eq(1)
        expect(Student.first.email).to eq('student@example.com')
        expect(Student.first.confirmed_at).to eq(nil)
      end
      
      it 'sends a confirmation email to the student' do
        expect(ActionMailer::Base.deliveries.count).to eq(1)
        email = ActionMailer::Base.deliveries.first
        expect(email).to deliver_to('student@example.com')
        expect(email).to deliver_from('support@bearcrawl.com')
        expect(email).to have_subject("Confirmation instructions")
      end
      
      it 'confirms the student properly' do
        email = ActionMailer::Base.deliveries.first
        visit(links_in_email(email)[0].gsub("http://localhost:3000", ""))
        sleep(inspection_time=0.5)
        #temporary
        expect(page).to have_content('Hello React')
        expect(page.driver.browser.manage.cookie_named('student_id')).to_not eq(nil)
        expect(page.driver.browser.manage.cookie_named('is_signed_in')).to_not eq(nil)
      end
      
      it 'does not confirm anyone with the wrong confirmation token' do
        visit '/students/confirmation?confirmation_token=faketoken'
        expect(page).to have_content('Hello React')
        expect(page.driver.browser.manage.cookie_named('student_id')).to eq(nil)
        expect(page.driver.browser.manage.cookie_named('is_signed_in')).to eq(nil)
      end
    end
  end
end