class StudentConfirmationsController < Devise::ConfirmationsController
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
      redirect_to student_profiles_path(@student)
    else
      redirect_to root_path
    end
  end
  
  def confirm_params
    params.require(:student).permit(:email, :password, :password_confirmation)
  end
end
