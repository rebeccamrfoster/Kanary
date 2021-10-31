class Api::MoviesController < ApplicationController
    def index
        @movies = Movie.all.includes(:genres)
        render "/api/movies/index"
    end

    def show
        @movie = Movie.find(params[:id])
        render "/api/movies/show"
    end
end