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

if (personalMoviesDB.count < 20 ) {
    alert('Watched little movies.');
} else if (personalMoviesDB.count >= 20 && personalMoviesDB.count <= 40) {
    alert('You are classical spectator');
} else if (personalMoviesDB.count > 40) {
    alert('You are a movie fan');
} else {
    alert('Happened error');
}

for (let i = 0; i < 2; i++) {
    let a = prompt('What is one of movie did you watch last?', '');
    let b = +prompt('How much do you rate it', '');
    if (a != null && a.length < 50 && a != '' && b != null  && b != '') {
        personalMoviesDB.movies[a] = b;
    } else {
        --i;
    }    
}

console.log(personalMoviesDB);
