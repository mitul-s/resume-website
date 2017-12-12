// LAST FM API WITH Fetch

// Collect IDs and input them into variables to update via API

let artist = document.getElementById('artist');
let song = document.getElementById('song');
let url = document.getElementById('url');
const username = "mitul-s";
// Private API Key
const api = "d24473d2ee4169f9f063bcc2f2ad1db5";

// Function to launch the API, using Fetch 
function getMusic() {
    // Fetch API key, username and formatted data.
    fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + username + '&api_key=' + api + '&format=json')
        .then((res) => res.json()) // Check if you response from the API server
        .then((data) => {
            // Pulling JSON information and inputing into the HTML
            url.href = data.recenttracks.track[0].url;
            song.innerHTML = data.recenttracks.track[0].name;
            artist.innerHTML = data.recenttracks.track[0].artist['#text'];
        })
        .catch(function (err) {
            // Catch if there's any errors with pulling the data.
            console.log("Sorry there has been error, read the following:" + err);
        });
}

// Run the function to get music. 
getMusic();