class Students::PasswordsController < Devise::PasswordsController
  before_action :verify_student_reset, only: :edit

  def create
    @student = Student.send_reset_password_instructions(request_params)
    if successfully_sent?(@student)
      sign_out("student")
      cookies.delete :student_id
      cookies.delete :is_signed_in
      redirect_to root_path
    else
      redirect_to new_student_password_path
    end
  end

  def edit
    @student = Student.new
    set_minimum_password_length
    @student.reset_password_token = params[:reset_password_token]
  end

  def update
    @student = Student.reset_password_by_token(new_password_params)
    if @student.errors.empty?
      sign_in(:student, @student)
      cookies.signed.permanent[:student_id] = @student.id
      cookies.signed.permanent[:is_signed_in] = "student"
      redirect_to root_path
      #redirect_to student_profiles_path(@student)
    else
      set_minimum_password_length
      redirect_to new_student_password_path
#      render json: {
#        "status": "error",
#        "message": "errors"
#        }, status: :unprocessable_entity
    end
  end

  private
  def request_params
    params.require(:student).permit(:email)
  end

  def new_password_params
    params.require(:student).permit(:reset_password_token, :password, :password_confirmation)
  end

  def verify_student_reset
    if !Student.with_reset_password_token(params[:reset_password_token]).present?
      redirect_to root_path
    end
  end
end
