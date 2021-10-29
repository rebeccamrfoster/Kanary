# == Schema Information
#
# Table name: moviegenres
#
#  id         :bigint           not null, primary key
#  movie_id   :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Moviegenre < ApplicationRecord
    validates :movie_id, :genre_id, presence: true

    belongs_to :movie,
        primary_key: :id,
        foreign_key: :movie_id,
        class_name: :Movie

    belongs_to :genre,
        primary_key: :id,
        foreign_key: :genre_id,
        class_name: :Genre
end
