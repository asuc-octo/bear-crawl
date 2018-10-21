require 'rails_helper'

RSpec.describe 'Registering a new student', type: :feature, js: true do
  context "with no users" do
    describe "creating a user" do
      before do
        visit '/student/signup/sign_up'
      end
      
      it 'creates the student' do
        binding.pry
      end
    end
  end
end