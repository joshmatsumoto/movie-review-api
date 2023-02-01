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
    
    app.get('/api/movies', (req,res)=>{
        movies.getAllMovies()
        .then(data=>{res.json(data)})
        .catch(err=>{console.log(err)});
    });

    app.post('/api/add-movie', (req,res)=>{
        const { movieName } = req.body;
        if (movieName){
            var arr =[];
            arr.push(movieName);
            movies.addMovie(arr)
            .then(data=>{res.status(201).json("success")})
            .catch(err=>{res.status(400).json("fail")});

        }
        res.status(400).json("fail");
        
    })




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// function init(){
//     startProgram();
// }

// init();