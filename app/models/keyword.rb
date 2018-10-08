class Keyword < ApplicationRecord
    belongs_to :club
    validates :club, :presence => true
    validates :label, :presence => true
end
