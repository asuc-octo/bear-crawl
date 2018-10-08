require 'rails_helper'

RSpec.describe Membership, type: :model do
  context "when a user joins a club" do
    let!(:student1)  {create(:student)}
    let!(:student2)  {create(:student)}
    let!(:club1) {create(:club)}
    let!(:membership1) {create(:membership, student: student1, club: club1)}
    let!(:membership2) {create(:membership, student: student2, club: club1)}

    it "updates the member_student count of that club" do
      expect(club1.member_students.count).to eq(2)
    end

    it "updates the member_clubs count of that student" do
      expect(student1.member_clubs.count).to eq(1)
    end

    it "throws an error if a student tries to join a club twice" do
      expect{create(:membership, student: student1, club:club1)}.to raise_error(ActiveRecord::RecordNotUnique)
    end
  end
end
