export const fetchWatchlists = () => {
    return $.ajax({
        method: "GET",
        url: "/api/watchlists"
    })
};

export const createWatchlist = watchlist => {
    return $.ajax({
        method: "POST",
        url: "/api/watchlists",
        data: { watchlist }
    })
};

export const deleteWatchlist = watchlist => {
    return $.ajax({
        method: "DELETE",
        url: `/api/watchlists/1`,
        data: { watchlist }
    })
};