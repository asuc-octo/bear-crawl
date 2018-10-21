class Students::RegistrationsController < Devise::RegistrationsController
  def new
    super
  end
  
  def create
    @student = Student.new(sign_up_params)
    if @student.save
      redirect_to new_student_confirmation_path(request.parameters)
    else
      clean_up_passwords @student
      set_minimum_password_length
      render json: {
        "status": "error",
        "message": "to be determined"
        }, status: :bad_request
    end
  end

  private
  def sign_up_params
    params.require(:student).permit(:username, :email, :password, :password_confirmation, :firstname, :lastname, :year, :linkedin, :major, :facebook, :profile_picture, :resume)
  end

  def account_update_params
    params.require(:student).permit(:username, :email, :password, :password_confirmation, :firstname, :lastname, :year, :linkedin, :major, :facebook, :profile_picture, :resume)
  end
end
