require 'rails_helper'

RSpec.describe 'Going to a clubs profile', type: :feature, js: true do
  context "with two existing students" do
    let!(:club_one) {create(:club, email: 'codebase@example.edu', website_url: 'isuck.com', description: 'We are codebase', name: 'Codebase', username: 'codebase')}
    
    let!(:club_two) {create(:club, email: 'mdb@example.edu', website_url: 'mdbsucksmore.com', description: 'We are MDB', name: 'Mobile Devs At Berkeley', username: 'mobile-devs-at-berkeley')}    
    
    it 'goes to homepage if profiles path is invalid' do
      visit 'clubs/profiles/notaclub'
      
      expect(page).to have_content 'Hello React'
      expect(page).to have_current_path(root_path)
    end
    
    it 'goes to the first clubs profile' do
      visit clubs_profile_path(club_one)
      expect(page).to have_content 'Codebase'
      expect(page).to have_content 'We are codebase'
      expect(page).to have_content 'isuck.com'
      
      expect(page).to_not have_content 'Mobile Devs At Berkeley'
      expect(page).to_not have_content 'mdbsucksmore.com'
      expect(page).to_not have_content 'We are MDB'
    end
    
    it 'goes to the second clubs profile' do
      visit clubs_profile_path(club_two)
      expect(page).to_not have_content 'Codebase'
      expect(page).to_not have_content 'We are codebase'
      expect(page).to_not have_content 'isuck.com'
      
      expect(page).to have_content 'Mobile Devs At Berkeley'
      expect(page).to have_content 'mdbsucksmore.com'
      expect(page).to have_content 'We are MDB'
    end
  end
end