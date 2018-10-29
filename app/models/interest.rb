class Interest < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  belongs_to :interestable, polymorphic: true
  validates :label, presence: true
end