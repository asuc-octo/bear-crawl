class Keyword < ApplicationRecord
    belongs_to :club
    validates :club_id, :presence => true, :uniqueness => true
    validates :label, :presence => true, :uniqueness => true
end
