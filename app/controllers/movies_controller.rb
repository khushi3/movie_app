class MoviesController < ApplicationController
def index
@movies = Movie.all
    @movies = Movie.find_by_name(params[:name]) if params[:name].present?
end
  def new

  end
def create
  render plain: params[:movie].inspect
end


def show

  end
end
