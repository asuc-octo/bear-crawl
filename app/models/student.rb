class Student < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :confirmable

  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :username, presence: true
  validates :year, presence: true
  validates :major, presence: true
  validates :linkedin, presence: true
  validates :facebook, presence: true

  validates :username, uniqueness: true



end
