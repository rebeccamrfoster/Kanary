class Api::MoviesController < ApplicationController
    def index
        @movies = Movie.all
        render "/api/movies/index"
    end

    def show
        @movie = Movie.find(params[:id])
        render :show
    end
end