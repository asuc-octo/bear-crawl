class Students::ConfirmationsController < Devise::ConfirmationsController
  before_action :verify_confirmation_token, only: [:show]
  
  def new
    @student = Student.send_confirmation_instructions(confirm_params)
    if successfully_sent?(@student)
      redirect_to root_path
    else
      redirect_to root_path
    end
  end
  
  def show
    @student = Student.confirm_by_token(params[:confirmation_token])
    if @student.errors.empty?
      cookies.signed.permanent[:student_id] = @student.id
      cookies.signed.permanent[:is_signed_in] = "student"
      redirect_to root_path
      #redirect_to student_profiles_path(@student)
    else
      redirect_to root_path
    end
  end
  
  def confirm_params
    params.require(:student).permit(:email, :password, :password_confirmation)
  end
  
  private
  def verify_confirmation_token
    student = Student.find_by(confirmation_token: params[:confirmation_token])
    if student.nil?
      redirect_to root_path
    end
  end
end