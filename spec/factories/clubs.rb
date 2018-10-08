FactoryBot.define do
  factory :club do
<<<<<<< HEAD
    
=======
    password {'password'}
    password_confirmation {'password'}
    
    website_url {"https://www.berkeley.edu"}
    description {"Example Club"}

    sequence(:name) { |n| "democlub#{n}" }
    sequence(:email) { |n| "democlub#{n}@example.com" }
>>>>>>> 94da5f3e193818b02f4cb07b3f10a564a87e0eec
  end
end
