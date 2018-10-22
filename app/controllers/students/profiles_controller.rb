class Students::ProfilesController < ApplicationController  
  before_action :verify_student_exists, only: [:show]
  
  def show
    @student
  end
  
  def update
  end
  
  private
  def verify_student_exists
    @student = Student.find_by(username: params[:id])
    if @student.nil?
      redirect_to root_path
    end
  end
end
