require 'rails_helper'

RSpec.describe 'Registering a new student', type: :feature, js: true do
  context "with no users" do
    describe "creating a user" do
      before do
        visit '/students/signup/sign_up'
      end
      
      it 'creates the student' do
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
        
        student = Student.first
        expect(Student.count).to eq(1)
        expect(student.email).to eq('student@example.com')
        expect(student.username).to eq('student')
        expect(student.major).to eq('Computer Science')
        
        #Sent confirmation instructions
        expect(ActionMailer::Base.deliveries.count).to eq(1)
        
        #Temp show
        expect(page).to have_content('Hello React')
      end
    end
  end
end