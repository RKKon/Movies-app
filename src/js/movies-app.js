// Counter of movies app
'use strict';

const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};

const lastMovieWatched = prompt('What is one of movie did you watch last?', '');
const rateMovie = +prompt('How much do you rate it', '');
const lastMovieWatched1 = prompt('What is one of movie did you watch last?', '');
const rateMovie1 = +prompt('How much do you rate it', '');

personalMoviesDB.movies[lastMovieWatched] = rateMovie;
personalMoviesDB.movies[lastMovieWatched1] = rateMovie1;

console.log(personalMoviesDB);
