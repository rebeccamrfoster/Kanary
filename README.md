# <img src="https://user-images.githubusercontent.com/88195745/144126607-717a4270-c3aa-42cd-ac49-b42512be51a8.png" width="300" height="auto" />

[Kanary Live!](https://kanary-rf.herokuapp.com/#/)

## Table of Contents
- [Description](#description)
- [Technologies](#technologies)
- [Core Features](#core-features)
- [Technical Challenges](#technical-challenges)

# Description
Kanary is a full stack, single-page web application inspired by Kanopy. It is a video streaming service that provides access to documentaries and independent films with a unique social, cultural, and political impact.

<p align="center">
  <img src="https://user-images.githubusercontent.com/88195745/141483916-99507227-fd2f-4d9c-acdd-2f902fdf1ce4.png" width="700" height="auto" />
</p>

# Technologies
- React/Redux
- Ruby on Rails
- JavaScript, HTML, & SCSS
- PostgreSQL
- Node.js
- jQuery
- jBuilder
- Webpack
- Amazon Web Services S3

Kanary is built with the React framework and Redux architecture on the frontend, supported by Ruby on Rails and a PostgreSQL database on the backend. Thumbnails and videos are implemented using Active Storage and hosted by Amazon Web Services S3.

# Core Features

## Video Playback
I utilized Amazon Web Services S3 (AWS) and Rails Active Storage to store and fetch videos and images from the cloud, preloading videos upon entering the video show page to minimize wait time for end users.

## Searchbar
<p align="center">
  <img src="https://user-images.githubusercontent.com/88195745/141476463-bf9d27fa-c600-40af-8595-d69b61f5246b.gif" width="400">
</p>
Designed a search bar feature using lifecycle methods and selector functions that allows users to search by director, description, and genre and ensures that the search results dynamically update as users type.
State contains query (value from text input) and movies (array containing matched movies from selector).
If the user deletes their search such that the query becomes an empty string, it displays null rather than leaving the movies there from before.
If nothing matches the query, an appropriate message is shown with suggestions as to what they could type to find matches.
If the user presses enter on an empty string, it does nothing. Otherwise it navigates to the search results index with the movies that match the search.
Upon submission, a `handleClearSearchbar` function is fired to reset the searchbar query to the empty string such that the dropdown is null.
```JavaScript
export const selectMoviesBySearch = (movies, genres, query) => {
    query = query.toLowerCase();

    return Object.values(movies).filter(movie => {
        return (
            movie.title.toLowerCase().includes(query) ||
            movie.description.toLowerCase().includes(query) ||
            movie.director.toLowerCase().includes(query) ||
            selectGenresByMovie(genres, movie)
                .some(genre => genre.toLowerCase().includes(query))
        )
    });
};
```

## My Watchlist
Implemented CRUD functionality and prefetched Active Record associations, enabling users to add and delete films from their watchlist while avoiding N + 1 queries

## Popup
Constructed a Popup component using React hooks to insert and clear a Popup element from the DOM whenever users add or remove films from their watchlists through CRUD actions, thus enhancing user experience.

# Technical Challenges
