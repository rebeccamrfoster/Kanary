class Movie < ApplicationRecord
    validates :title, :year, :duration, :description, :director, presence: true
end