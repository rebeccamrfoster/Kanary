class AddUniqueIndexToWatchlistsTable < ActiveRecord::Migration[5.2]
  def change
    add_index :watchlists, [:user_id, :movie_id], unique: true
  end
end
