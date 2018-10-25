class Clubs::PasswordsController < Devise::PasswordsController
  before_action :verify_club_reset, only: :edit

  def create
    @club = Club.send_reset_password_instructions(request_params)
    if successfully_sent?(@club)
      sign_out("club")
      cookies.delete :club_id
      cookies.delete :is_signed_in
      redirect_to root_path
    else
      redirect_to new_club_password_path
    end
  end

  def edit
    @club = Club.new
    set_minimum_password_length
    @club.reset_password_token = params[:reset_password_token]
  end

  def update
    @club = Club.reset_password_by_token(new_password_params)

    if @club.errors.empty?
      sign_in(:club, @club)
      cookies.signed.permanent[:club_id] = @club.id
      cookies.signed.permanent[:is_signed_in] = "club"
      redirect_to root_path
      #redirect_to club_profiles_path(@club)
    else
      set_minimum_password_length
      redirect_to new_club_password_path
      
#      render json: {
#        "status": "error",
#        "message": "errors"
#        }, status: :unprocessable_entity
    end
  end

  private
  def request_params
    params.require(:club).permit(:email)
  end

  def new_password_params
    params.require(:club).permit(:reset_password_token, :password, :password_confirmation)
  end

  def verify_club_reset
    if !Club.with_reset_password_token(params[:reset_password_token]).present?
      redirect_to root_path
    end
  end
end
