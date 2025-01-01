var musicPlayer = document.getElementById("music-player");
var musicInput = document.getElementById("music-input");
var uploadButton = document.getElementById("upload-button");
var songName = document.getElementById("song-name");
var searchInput = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");
var spotifyPlayer = document.getElementById("spotify-player");
var spotifyInput = document.getElementById("spotify-input");
var spotifyButton = document.getElementById("spotify-button");

uploadButton.addEventListener("click", function () {
  var file = musicInput.files[0];
  musicPlayer.src = URL.createObjectURL(file);
  songName.textContent = file.name;
  localStorage.setItem("song", file);
});

spotifyButton.addEventListener("click", function () {
  var spotifyLink = spotifyInput.value;
  spotifyPlayer.src = spotifyLink;
  spotifyInput.value = "";
});
