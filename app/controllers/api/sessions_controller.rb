class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["The email or password you've entered is incorrect. Please try again."], status: 401
        end
    end

    def destroy
        @user = curent_user
        if @user
            logout!
            render json: ["Logout was successful."]
        end
    end
end