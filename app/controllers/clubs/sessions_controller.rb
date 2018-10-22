class Clubs::SessionsController < Devise::SessionsController
  def new 
    super
  end

  def create
    @club = warden.authenticate!(auth_options)
    cookies.signed.permanent[:club_id] = @club.id
    cookies.signed.permanent[:is_signed_in] = "club"
    sign_in("club", @club)
    # redirect_to club_profiles_path(@club)
    redirect_to root_path
  end

  def destroy
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    cookies.delete :club_id
    cookies.delete :is_signed_in
    yield if block_given?
    redirect_to root_path
  end
  
  def after_sign_in_path_for(resource)
    redirect_to root_path
  end
end
