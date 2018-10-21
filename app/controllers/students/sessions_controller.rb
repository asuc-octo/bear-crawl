class Students::SessionsController < Devise::SessionsController
  def new
    super
  end
  
  def create
    @student = warden.authenticate!(auth_options)
    cookies.signed.permanent[:student_id] = @student.id
    cookies.signed.permanent[:is_signed_in] = "student"
    sign_in("student", @student)
    redirect_to root_path
    #redirect_to student_profiles_path(@student)
  end
  
  def destroy
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    cookies.delete :student_id
    cookies.delete :is_signed_in
    yield if block_given?
    redirect_to root_path
  end
  
  def after_sign_in_path_for(resource)
    redirect_to root_path
  end
end
