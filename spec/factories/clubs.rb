FactoryBot.define do
  factory :club do
    password {'password'}
    password_confirmation {'password'}

    confirmed_at {DateTime.now}

    website_url {"https://www.berkeley.edu"}
    description {"Example Club"}
    username {"example-club"}

    sequence(:name) { |n| "democlub#{n}" }
    sequence(:email) { |n| "democlub#{n}@example.com" }
  end
end
