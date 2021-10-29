json.extract! @user, :id, :name, :email
json.movieIds user.movies.pluck(:id)