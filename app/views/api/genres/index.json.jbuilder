@genres.each do |genre|
    json.set! genre.id do
        json.partial! "genre", genre: genre
        json.movieIds genre.movies.pluck(:id)
    end
end