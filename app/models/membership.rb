class Membership < ApplicationRecord

  belongs_to :student
  belongs_to :club

  validates :student, :club, :presence => true


end
