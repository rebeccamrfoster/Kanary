json.extract! movie, :id, :title, :year, :duration, :description, :director
json.genreIds movie.genres.pluck(:id)
json.thumbnail movie.thumbnail.attached? ? url_for(movie.thumbnail) : ""
json.video movie.video.attached? ? url_for(movie.video) : ""