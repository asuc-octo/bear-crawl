FactoryBot.define do
  factory :event do
    club
    title { "MyString" }
    start_date { Date.today }
    end_date { Date.today + 1.day }
    start_time { Time.now }
    end_time { Time.now + 1.hour }
  end
end
