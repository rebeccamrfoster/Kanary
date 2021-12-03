export const fetchWatchlists = () => (
    $.ajax({
        method: "GET",
        url: "/api/watchlists"
    })
);

export const createWatchlist = watchlist => (
    $.ajax({
        method: "POST",
        url: "/api/watchlists",
        data: { watchlist }
    })
);

export const deleteWatchlist = watchlist => (
    $.ajax({
        method: "DELETE",
        url: `/api/watchlists/1`,
        data: { watchlist }
    })
);