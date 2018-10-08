require 'rails_helper'

RSpec.describe Keyword, type: :model do
  context "with a club" do
    let!(:club) {create(:club)}
    
    it "creates a keyword for the club" do
      create(:keyword, label: "finance", club: club)
      expect(club.keywords.count).to eq(1)
      expect(club.keywords.first.label).to eq("finance")
    end
    
    it "creates multiple keywords for the club" do
      create(:keyword, label: "finance", club: club)
      create(:keyword, label: "investments", club: club)
      expect(club.keywords.count).to eq(2)
    end
    
    it 'does not create duplicate keywords' do
      create(:keyword, label: "finance", club: club)
      expect{create(:keyword, label: "finance", club: club)}.to raise_error(ActiveRecord::RecordNotUnique)
      expect(club.keywords.count).to eq(1)
    end
  end
end
