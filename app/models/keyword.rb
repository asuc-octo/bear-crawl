class Keyword < ApplicationRecord
    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks

    belongs_to :club
    validates :club, :presence => true
    validates :label, :presence => true
end