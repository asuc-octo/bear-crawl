class ClubSessionsController < Devise::SessionsController
    def create
        @club = warder.authenticate!(auth_options)
        cookies.signed.permanent[:club_id] = @club.id
        cookies.signed.permanent[:is_signed_in] = "club"
        sign_in("club", @club)
        redirect_to club_profiles_path(@club)
    end

    def destroy
        signed_out = (Devise.sign_out_all_scopes ? sign_out :
            sign_out(resource_name))
        cookies.delete :club_id
        cookies.delete :is_signed_in
        yield if block_given?
        redirect_to root_path
    end
end
