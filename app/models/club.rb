class Club < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :validatable, :confirmable
  
  validates :description, :website_url, :presence => true
  validates :name, :presence => true, :uniqueness => true

end
