class Watchlist < ApplicationRecord
    validates :user_id, :movie_id, presence: true
end