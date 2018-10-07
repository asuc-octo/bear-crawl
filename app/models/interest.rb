class Interest < ApplicationRecord
  belongs_to :interestable, polymorphic: true
  
  validates :label, presence: true
end
