class Event < ApplicationRecord
  belongs_to :club
  validates_presence_of :club, :title, :start_date, :end_date, :start_time, :end_time
end
