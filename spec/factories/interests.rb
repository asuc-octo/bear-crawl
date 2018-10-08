FactoryBot.define do
  factory :interest do
    label {"example"}
    association :interestable, factory: :student
  end
end
