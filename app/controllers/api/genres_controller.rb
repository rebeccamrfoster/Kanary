class Api::GenresController < ApplicationController
    def index
        @genres = Genre.all.includes(:movies)
        render "/api/genres/index"
    end

    def show
        @genre = Genre.find(params[:id])
        render "/api/genres/show"
    end
end