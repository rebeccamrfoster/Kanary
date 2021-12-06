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

```javascript
handleUpdate(event) {
    const query = event.target.value;

    const matched = this.props.selectMoviesBySearch(
        this.props.movies, this.props.genres, query
    );

    this.setState({ query, movies: matched });
}
```

#### **CHALLENGE:**
Initially, if the user deleted their search query from the search bar, the `selectMoviesBySearch` function would select for movies whose director, description, or genre matched an empty string, which of course was all movies in the database. Furthermore, if the user submitted the form containing the input element on an empty search query string, the site would navigate to the search results page to display all those movies. If the user submitted the form when the input element was populated with a valid search query, the site would successfully navigate to the search results page but the search bar would remain populated with the user's latest query and a dropdown with the matching movies.

#### **SOLUTION:**
If the value of the input element becomes empty at any point, the component renders `null` rather than rendering all movies in the database. If the user tries to submit the form on an empty search query string, the submit button is nonresponsive and the user will remain on the current page. Upon submission of a valid search query, a `handleClearSearchbar` function is fired to reset the searchbar query to the empty string such that the dropdown becomes `null` and disappears.

## Popup
Whenever a user adds or removes a film from their watchlist (via CRUD actions), a popup appears to inform them that the action was successful. The `Popup` component is constructed using React hooks to fade in when the user adds or removes a film and fade out when the user clicks anywhere on the popup, including the "X" button.

<p align="center">
  <img src="https://user-images.githubusercontent.com/88195745/144902906-7e18c8e7-11f0-46f3-a138-3547711b5929.png" width="400px" />
</p>

#### **CHALLENGE:**
Initially, when a user added or removed multiple films in succession from the `MovieIndex` page, only the popup for the first movie added or removed was visible, so the most recent action was not reflected by the information on the popup.

#### **SOLUTION:**
By adding a Boolean value called `displayPopup` to the state of the parent component, the `Popup` component is now conditionally rendered based on that value. The parent component passes down a `clearPopup` function to the `Popup` component. When invoked in the `Popup` component, `clearPopup` toggles the value of `displayPopup` to `false` in the parent, thus removing the previous popup from the page before rendering a new one to reflect the most recent user action.

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
