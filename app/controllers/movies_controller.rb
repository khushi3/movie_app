class MoviesController < ApplicationController

  def index
    # @movies = Movie.all
    # @movies = Movie.find_by_name(params[:name]) if params[:name].present?
    @movies = Movie.all.order('order_no ASC')
  end

  def new
  end

  def edit
    # @movie = Movie.find(params[:id])
  end

  def create
    Movie.create(params[:movie])
  end


  def show
    @movie = Movie.find(params[:id])
  end

  def sort
    # reading
    params[:changed_orders].values.each do |param|
      #update
      movie = Movie.find(param[:id])
      movie.order_no = param[:order_no]
      movie.save!
    end
      render text: 'success'
  end
end

