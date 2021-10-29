class CreateMoviegenres < ActiveRecord::Migration[5.2]
  def change
    create_table :moviegenres do |t|
      t.integer :movie_id, null: false
      t.integer :genre_id, null: false

      t.timestamps
    end

    add_index :moviegenres, :movie_id
    add_index :moviegenres, :genre_id
  end
end
