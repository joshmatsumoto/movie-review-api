const express = require('express');
const mysql = require('mysql2');
const Movies = require('./src/Movies.js');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let connection;

// async function startProgram() {
    
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'movies_db'
    });
    connection.connect();

    const movies = new Movies(connection);
    movies.viewAllMovies()
        .then((data) => {console.log(data)})
        .catch((err) => console.log(err));



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// function init(){
//     startProgram();
// }

// init();