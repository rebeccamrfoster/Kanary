@watchlists.each do |watchlist|
    json.set! watchlist.id do
        json.partial! "watchlist", watchlist: watchlist
    end
end