class Clubs::ProfilesController < ApplicationController  
  before_action :verify_club_exists, only: [:show]
  
  def show
    @club
  end
  
  def update
  end
  
  private
  def verify_club_exists
    @club = Club.find_by(username: params[:id])
    if @club.nil?
      redirect_to root_path
    end
  end
end
