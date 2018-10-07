class Membership < ApplicationRecord

  belongs_to :student
  belong_to :club

  validates :student, :club, :presence => true


end
