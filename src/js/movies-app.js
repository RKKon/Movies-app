// Counter of movies app
'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films have you watched?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films have you watched?', '');
    }
}

// start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function showMyDB() {
    if (personalMoviesDB.private === false) {
        console.log(personalMoviesDB);
    }
}
showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let a = prompt(`Your favorite genre is numbered ${i}`);
        personalMoviesDB.genres.push(a);
    }
}
writeYourGenres();

function detectWatchedMovies() {
    if (personalMoviesDB.count < 20 ) {
        alert('Watched little movies.');
    } else if (personalMoviesDB.count >= 20 && personalMoviesDB.count <= 40) {
        alert('You are classical spectator');
    } else if (personalMoviesDB.count > 40) {
        alert('You are a movie fan');
    } else {
        alert('Happened error');
    }
}

// detectWatchedMovies();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('What is one of movie did you watch last?', '');
        let b = +prompt('How much do you rate it', '');
        if (a != null && a.length < 50 && a != '' && b != null  && b != '') {
            personalMoviesDB.movies[a] = b;
        } else {
            --i;
        }    
    }
}

// rememberMyFilms();


/* console.log(personalMoviesDB); */
