class Club < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  before_save :create_username
  
  devise :database_authenticatable, :registerable,
      :recoverable, :validatable, :confirmable
         
  has_many :memberships
  has_many :member_students, through: :memberships, source: :student
  has_many :keywords
  has_many :events


  validates :description, :website_url, :presence => true
  validates :name, :presence => true, :uniqueness => true

  has_many :interests, as: :interestable, dependent: :destroy

  
  def to_param
    username
  end
  
  def create_username
    self.username = self.name.downcase.gsub(" ", "-")
  end
end
