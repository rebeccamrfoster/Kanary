json.extract! movie, :id, :title, :year, :duration, :description, :director
if movie.thumbnail.attached?
    json.thumbnail url_for(movie.thumbnail)
end
# movie.thumbnail || 