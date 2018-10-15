class Club < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
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
end
