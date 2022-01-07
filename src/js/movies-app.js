// Counter of movies app
'use strict';

const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        this.count = +prompt('How many films have you watched?', '');
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('How many films have you watched?', '');
        }
    },
    detectWatchedMovies: function () {
        if (this.count < 20 ) {
            alert('Watched little movies.');
        } else if (this.count >= 20 && this.count <= 40) {
            alert('You are classical spectator');
        } else if (this.count > 40) {
            alert('You are a movie fan');
        } else {
            alert('Happened error');
        }
    },
    writeYourGenres: function () {  
        for (let i = 1; i <= 3; i++) {
            let a;
            a = prompt(`Your favorite genre is numbered ${i}`);
            if (a != '' && a != null ) {
                this.genres.push(a);
            } else {
                --i;
            }  
        }
        personalMoviesDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр под номеров # ${i + 1} it is ${element}`);
        });
    }, 
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('What is one of movie did you watch last?', '');
            let b = +prompt('How much do you rate it', '');
            if (a != null && a.length < 50 && a != '' && b != null  && b != '') {
                this.movies[a] = b;
            } else {
                --i;
            }    
        }
    },
    showMyDB: function () {
        if (this.private === false) {
            console.log(this);
        }
    },
    toggleVisibleMyBD: function () {
        if (this.private === false) {
            this.private = true;
        } else {
            this.private = false;
        }
    },
};

// personalMoviesDB.start();

// personalMoviesDB.detectWatchedMovies();

// personalMoviesDB.writeYourGenres();

// personalMoviesDB.rememberMyFilms();

// personalMoviesDB.showMyDB();

// personalMoviesDB.toggleVisibleMyBD();


console.log(personalMoviesDB);
