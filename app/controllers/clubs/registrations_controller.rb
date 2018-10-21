class Clubs::RegistrationsController < Devise::ConfirmationsController
  def new
    @club = Club.new
  end
  
  def create
    @club = Club.new(sign_up_params)
    if @club.save
      redirect_to new_club_confirmation_path(request.parameters)
    else
      clean_up_passwords @club
      set_minimum_password_length
      render json: {
        "status": "error",
        "message": "to be determined"
        }, status: :bad_request
    end
  end

  private
  def sign_up_params
    params.require(:club).permit(:email, :password, :password_confirmation, :name, :description, :website)
  end

  def account_update_params
    params.require(:club).permit(:email, :password, :password_confirmation, :name, :description, :website)
  end
end
