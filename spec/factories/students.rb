FactoryBot.define do
  factory :student do
    password {'password'}
    password_confirmation {'password'}
    
    confirmed_at {DateTime.now}
    
    year {2021}
    major {"Computer Science"}
    linkedin {"https://www.linkedin.com/in/exampleuser"}
    facebook {"https://www.facebook.com/exampleuser"}
    
    sequence(:username) { |n| "demostudent#{n}" }
    sequence(:firstname) { |n| "Demo#{n}"}
    sequence(:lastname) { |n| "Student#{n}" }
    sequence(:email) { |n| "demostudent#{n}@example.com" }
  end
end
