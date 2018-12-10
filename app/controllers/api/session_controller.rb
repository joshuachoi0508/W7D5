class Api::SessionController < ApplicationController
  def create
    #rendering json
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(user)
      render "api/users/show"
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    #rendering json
    if logged_in?
      logout!
      render "api/users/show"
    else
      render :json => ["Nobody's signed in"], status: 404
    end
  end
end
