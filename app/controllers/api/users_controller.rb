class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    #rendering json
    @user = User.new(user_params)
    if @user.save
      redirect_to root_url
    else
      flash[:errors] = @user.errors
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
