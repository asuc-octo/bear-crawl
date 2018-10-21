class Student < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :validatable,
         :confirmable

  has_many :memberships
  has_many :member_clubs, through: :memberships, source: :club

  validates :firstname, :lastname, :username, :year, :major, :linkedin, :facebook, :presence => true
  validates :username, :uniqueness => true
  
  has_one_attached :profile_picture
  has_one_attached :resume

  
  has_many :interests, as: :interestable, dependent: :destroy
  
  def to_param
    username
  end
end
