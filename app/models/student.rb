class Student < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable

  validates :firstname, :lastname, :username, :year, :major, :linkedin, :facebook, :presence => true
  validates :username, :uniqueness => true

  
  has_many :interests, as: :interestable, dependent: :destroy
end
