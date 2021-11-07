# == Schema Information
#
# Table name: watchlists
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  movie_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Watchlist < ApplicationRecord
    validates :user_id, :movie_id, presence: true
    validates :user_id, uniqueness: { scope: :movie_id }

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :movie,
        primary_key: :id,
        foreign_key: :movie_id,
        class_name: :Movie
end
