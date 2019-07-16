//src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"

require("dotenv").config();

var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);

var artist = process.argv[3]

var axios = require("axios")

var ombdURL = "http://www.omdbapi.com/?apikey=trilogy&"

var bitURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"


/*axios.get(ombdURL).then(function(response){

    console.log(response)
});*/

axios.get(bitURL).then(function(response){

    console.log(response)
})

