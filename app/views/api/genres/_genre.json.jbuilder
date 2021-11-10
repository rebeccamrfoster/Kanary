json.extract! genre, :id, :name
json.movieIds genre.movies.pluck(:id)