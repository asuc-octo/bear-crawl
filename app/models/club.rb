class Club < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks


  before_save :create_username

  devise :database_authenticatable, :registerable,
      :recoverable, :validatable, :confirmable

  has_many :memberships
  has_many :member_students, through: :memberships, source: :student
  has_many :keywords
  has_many :events
  has_many :categories


  validates :description, :website_url, :presence => true
  validates :name, :presence => true, :uniqueness => true

  has_many :interests, as: :interestable, dependent: :destroy

  scope :find_categories, -> (query) {joins(:categories).where(categories: {label: query})}

  def as_indexed_json(options = {})
    self.as_json(
      only: [:name],
      include:  {
        categories: {
          only: [:label]
        },
        keywords: {
          only: [:label]
        },
        interests: {
          only: [:label]
        }
      }
    )
  end

  def self.search_by(searchquery)
    self.__elasticsearch__.search(
    query: {
      multi_match: {
        query: searchquery,
        fields: ['name', 'categories.label', 'keywords.label', 'interests.label']
        }
      }
    )
  end


  def to_param
    username
  end

  def create_username
    self.username = self.name.downcase.gsub(" ", "-")
  end
end
