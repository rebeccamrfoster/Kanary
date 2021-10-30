@movies.each do |movie|
    json.set! movie.id do
        json.partial! "movie", movie
        json.genreIds movie.genres.pluck(:id)
    end
end