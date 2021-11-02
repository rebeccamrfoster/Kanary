class Api::WatchlistsController < ApplicationController
    def index
        @watchlists = Watchlist.where(user_id: current_user.id)
        render "/api/watchlists/index"
    end

    def show
        @watchlist = Watchlist.find(params[:id])
        render "/api/watchlists/show"
    end

    def create
        @watchlist = Watchlist.new(watchlist_params)
        @watchlist.user_id = current_user.id;

        if @watchlist.save
            render "/api/watchlists/show"
        else
            render json: @user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @watchlist = Watchlist.find_by(id: params[:id])

        if @watchlist.destroy
            render "/api/watchlists/show"
        else
            render json: @watchlist.errors.full_messages, status: :unprocessable_entity
        end
    end

    private
    def watchlist_params
        params.require(:watchlist).permit(:user_id, :movie_id)
    end
end