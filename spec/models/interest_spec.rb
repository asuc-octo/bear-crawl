require 'rails_helper'

RSpec.describe Interest, type: :model do
  context "with an existing student" do
    let!(:student) {create(:student)}
    
    it 'adds an interest to the student' do
      create(:interest, interestable: student)
      expect(student.interests.count).to eq(1)
    end
    
    it 'adds multiple interests to the student' do
      int_1 = create(:interest, label: "int1", interestable: student)
      int_2 = create(:interest, label: "int2", interestable: student)
      expect(student.interests.count).to eq(2)
      expect(student.interests).to eq([int_2, int_1])
    end
  end
  
  context "with an existing club" do
    let!(:club) {create(:club)}
    
    it 'adds an interest to the club' do
      create(:interest, interestable: club)
      expect(club.interests.count).to eq(1)
    end
    
    it 'adds multiple interests to the club' do
      int_1 = create(:interest, label: "int1", interestable: club)
      int_2 = create(:interest, label: "int2", interestable: club)
      expect(club.interests.count).to eq(2)
#      binding.pry
      expect(club.interests.all).to eq([int_2, int_1])
    end
  end
end
