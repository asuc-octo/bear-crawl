class ClubRegistrationsController < Devise::ConfirmationsController
  def new
    @club = Club.send_confirmation_instructions(confirm_params)
    if successfully_sent?(@club)
      redirect_to root_path
    else
      redirect_to root_path
    end
  end
  
  def show
    @club = Club.confirm_by_token(params[:confirmation_token])
    if @club.errors.empty?
      redirect_to club_profiles_path(@club)
    else
      redirect_to root_path
    end
  end
  
  def confirm_params
    params.require(:club).permit(:email, :password, :password_confirmation)
  end
end
