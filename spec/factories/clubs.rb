FactoryBot.define do
  factory :club do
    password {'password'}
    password_confirmation {'password'}
    
    website {"https://www.berkeley.edu"}
    description {"Example Club"}

    sequence(:name) { |n| "democlub#{n}" }
    sequence(:email) { |n| "democlub#{n}@example.com" }
  end
end
