require 'rails_helper'

RSpec.describe 'Going to a students profile', type: :feature, js: true do
  context "with two existing students" do
    let!(:student_one) {create(:student, year: 2020, major: 'EECS', username: 'oskithebear', firstname: 'Oski', lastname: 'The Bear', email: 'oski@example.edu')}
    
    let!(:student_two) {create(:student, year: 1950, major: 'Media Studies', username: 'carolchrist', firstname: 'Carol', lastname: 'Christ', email: 'carol@example.edu')}
    
    it 'goes to homepage if profiles path is invalid' do
      visit 'students/profiles/notauser'
      
      expect(page).to have_content 'Hello React'
      expect(page).to have_current_path(root_path)
    end
    
    it 'goes to the first students profile' do
      visit students_profile_path(student_one)
      expect(page).to have_content 'Oski The Bear'
      expect(page).to have_content 'EECS'
      expect(page).to have_content '2020'
      
      expect(page).to_not have_content 'Carol Christ'
      expect(page).to_not have_content 'Media Studies'
      expect(page).to_not have_content '1950'
    end
    
    it 'goes to the second students profile' do
      visit students_profile_path(student_two)
      expect(page).to_not have_content 'Oski The Bear'
      expect(page).to_not have_content 'EECS'
      expect(page).to_not have_content '2020'
      
      expect(page).to have_content 'Carol Christ'
      expect(page).to have_content 'Media Studies'
      expect(page).to have_content '1950'
    end
  end
end