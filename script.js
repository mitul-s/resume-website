// Play name on click 
// Collect variables for the button to click and the sound played
const nameAudio = document.getElementById('sound');
const nameSrc = new Audio("media/mitul.mp3");

// Event listener to play sound when clicked.
nameAudio.addEventListener('click', function () {
    nameSrc.play();
});

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

// Form Validation
const wrong = "Please enter a valid email address";
const correct = "Thanks! We'll be in touch.";


function validate(event) {
    'use strict';
    // Prevent the page from reloading on submit
    event.preventDefault();
    // Check if email contains and illegal characters
    // If email doesn't contain illegal chars, show valid statement
    // Else reject statement
    const email = document.getElementById('email'), regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (regex.test(email.value)) {
        document.getElementById('wrong').innerHTML = "";
        document.getElementById('correct').innerHTML = correct;
        return true;
    } else {
        document.getElementById('correct').innerHTML = "";
        document.getElementById('wrong').innerHTML = wrong;
        email.focus;
        return false;
    }
}
var sub = document.querySelector("#submit");
sub.addEventListener("click", validate);