# == Schema Information
#
# Table name: movies
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  year        :integer          not null
#  duration    :integer          not null
#  description :text             not null
#  director    :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Movie < ApplicationRecord
    validates :title, :year, :duration, :description, :director, presence: true

    has_one_attached :video_url
    has_one_attached :thumbnail

    has_many :watchlists,
        primary_key: :id,
        foreign_key: :movie_id,
        class_name: :Watchlist

    has_many :moviegenres,
        primary_key: :id,
        foreign_key: :movie_id,
        class_name: :Moviegenre

    has_many :genres,
        through: :moviegenres,
        source: :genre
end
