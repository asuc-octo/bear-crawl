require 'rails_helper'

RSpec.describe Event, type: :model do
  context "with existing clubs" do
    let!(:club) {create(:club)}
    
    it 'creates an event for the club' do
      event = create(:event, club: club)
      expect(club.events.count).to eq(1)
      expect(club.events.first).to eq(event)
    end
    
    it 'create multiple events for the club' do
      event_1 = create(:event, club: club)
      event_2 = create(:event, club: club,
        start_date: Date.today + 1.week,
        end_date: Date.today + 1.week + 1.day,
        end_time: Time.now,
        start_time: Time.now + 1.hour
      )
      
      expect(club.events.count).to eq(2)
      expect(club.events.first).to eq(event_1)
      expect(club.events.last).to eq(event_2)
    end
  end
end
