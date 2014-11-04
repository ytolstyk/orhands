module Api
  class SessionsController < ApiController
    before_action :ensure_logged_in, only: [:destroy]

    def new
    end

    def create
      user = User.find_by_credentials(
          params[:user][:username],
          params[:user][:password]
        )

      if user
        login_user!(user)
        render json: { username: user.username }
      else
        flash.now[:errors] = ["Username/password doesn't exist"]
        render json: { errors: ["Username/password doesn't exist"] }
      end
    end

    def destroy
      logout_user!(current_user)
      render json: { username: current_user.username }
    end
  end
end