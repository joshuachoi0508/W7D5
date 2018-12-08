class Api::SessionController < ApplicationController
  def create
    #rendering json
  end

  def destroy
    #rendering json
    if logged_in?
      logout!
      render json: {}
    else
      render :json => {:error => "not-found"}.to_json, :status => 404
    end
  end
end
