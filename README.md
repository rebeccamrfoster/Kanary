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

<p align="center">
  <img src="https://user-images.githubusercontent.com/88195745/144888505-bd3909aa-dac9-421d-ad77-58465e1630c2.png" width="400px" />
</p>

## Searchbar
The searchbar feature uses lifecycle methods and selector functions to enable users to search the site's selection of films by director, description, or genre.

<p align="center">
  <img src="https://user-images.githubusercontent.com/88195745/141476463-bf9d27fa-c600-40af-8595-d69b61f5246b.gif" width="400">
</p>

In order to ensure that the search results update dynamically as users type in the search bar, the state for the `SearchbarIndex` component contains two key-value pairs: (1) the search query from the text input element and (2) an array containing movie objects that match the search query. Each time the search query is updated, the selector function `selectMoviesBySearch` is invoked to select for films that match the query. The returned array is then used to set state and initiate a rerender of the `SearchbarIndex` component.

If the user deletes their search such that the query becomes an empty string, it displays null rather than leaving the movies there from before.
If nothing matches the query, an appropriate message is shown with suggestions as to what they could type to find matches.
If the user presses enter on an empty string, it does nothing. Otherwise it navigates to the search results index with the movies that match the search.
Upon submission, a `handleClearSearchbar` function is fired to reset the searchbar query to the empty string such that the dropdown is null.

```javascript
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

```javascript
handleUpdate(event) {
    const query = event.target.value;

    const matched = this.props.selectMoviesBySearch(
        this.props.movies, this.props.genres, query
    );

    this.setState({ query, movies: matched });
}
```

I conditionally render the Popup component based on the Boolean value of `displayPopup`, which is stored in the state, passing in the `clearPopup` function, which, when called in the Popup component, toggles the state of the parent component, `GenreCarouselItem` or `MovieShow`, causing it to be removed from the DOM entirely. But only after the Popup component is faded out, assigning it an id of fade-out.
```javascript
{
    this.state.displayPopup ? (
        <Popup key={movie.id}
            added={this.state.icon === window.check_icon}
            title={movie.title} 
            clearPopup={this.clearPopup} />
    ) : null
}
```

```javascript
const handleClearPopup = () => {
    const el = document.querySelector(".popup");
    el.id = "fade-out";
    setTimeout(() => {
        clearPopup();
    }, 600)
};
```

Utilized Amazon Web Services S3 (AWS) and Rails Active Storage to store and fetch videos and images from the
cloud, preloading videos upon entering the video show page to minimize wait time for end users.

Designed a search bar feature using lifecycle methods and selector functions that allows users to search by
director, description, and genre and ensures that the search results dynamically update as users type.

Constructed a Popup component using React hooks to insert and clear a Popup element from the DOM whenever
users add or remove films from their watchlists through CRUD actions, thus enhancing user experience.

## My Watchlist
Implemented CRUD functionality and prefetched Active Record associations, enabling users to add and delete films from their watchlist while avoiding N + 1 queries

## Popup
Constructed a Popup component using React hooks to insert and clear a Popup element from the DOM whenever users add or remove films from their watchlists through CRUD actions, thus enhancing user experience.

# Technical Challenges
