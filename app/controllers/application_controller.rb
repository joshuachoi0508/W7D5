class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    @current_user = User.find_by(session_token: session[:session_token])
    return @current_user if @current_user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def login(user)
    current_user = user
    current_user.session_token = User.generate_session_token
    session[:session_token] = current_user.session_token
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    redirect_to root_url unless logged_in?
  end
end
