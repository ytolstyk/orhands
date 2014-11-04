module Api
  class UsersController < ApiController
    before_action :ensure_logged_in, except: [:new, :create]

    def index
      @users = User.all
    end

    def new
      @user = User.new
    end

    def create
      @user = User.new(user_params)

      if @user.save
        login_user!(@user)
        render json: { username: @user.username }
      else
        # flash.now[:errors] = @user.errors.full_messages
        render json: { errors: @user.errors.full_messages }
      end
    end

    def show
      @user = User.find(params[:id])
    end

    private

    def user_params
      params.require(:user).permit(:username, :password)
    end
  end
end