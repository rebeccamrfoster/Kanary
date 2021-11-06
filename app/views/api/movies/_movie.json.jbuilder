json.extract! movie, :id, :title, :year, :duration, :description, :director
json.genreIds movie.genres.pluck(:id)
if movie.thumbnail.attached?
    json.thumbnail url_for(movie.thumbnail)
end
# movie.thumbnail || 