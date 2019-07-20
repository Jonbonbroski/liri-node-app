//requires

require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios")


//variables for input
var choiceTwo = process.argv[3];

var choice = process.argv[2];

var spotify = new Spotify(keys.spotify);

//URLs 
var spotURL;

var ombdURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + choiceTwo;

var bitURL = "https://rest.bandsintown.com/artists/" + choiceTwo + "/events?app_id=trilogy"


//switch to choose search

switch (choice) {
    case "concert-this":
        bit();
        break;
    case "spotify-this-song":
        spotSong()
        break;
    case "movie-this":
        ombdMovie();
        break;
    case "do-what-it-says":
        break;
    default:
        break;
}



//functions for searches 

function bit() {


    axios.get(bitURL).then(function (response) {

        //console.log(response);

        concertName = response.data[1].description;
        dateTime = response.data[1].datetime;
        //location = response.data
        location = response.data[0].venue.name;
        country = response.data[0].venue.country;
        region = response.data[0].venue.region;
        city = response.data[0].venue.city;
        //console.log(concertName);

        console.log(concertName)
        console.log(dateTime)
        console.log(location + "," + country + "," + region + "," + "," + city)




    })
};

function spotSong() {

    spotify.search({ type: 'track', query: "I Want it That Way", limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data);
    });


};

function ombdMovie(){


    axios.get(ombdURL).then(function (response) {

        title = response.data.Title;
        release = response.data.Released;
        rating = response.data.Rated; 
        rtRating = response.data.imdbRating;
        country = response.data.Country; 
        language = response.data.Language;
        plot = response.data.Plot;
        actors = response.data.Actors;

        console.log("Title:"+title);
        console.log("Release Date:"+ release)
        console.log("Rating:"+rating)
        console.log("IMDB Rating:"+rtRating)
        console.log("Country:"+country)
        console.log("Language:"+ language)
        console.log("Plot:"+plot)
        console.log("Actors:"+actors)

    })
};


