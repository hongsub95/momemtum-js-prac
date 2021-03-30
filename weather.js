const COORDS = 'coords'
const API_KEY = "0cfb28ea66b1dec513433cf0484cf2fa"
function saveCoords(coords){
    localStorage.setItem(COORD,JSON.stringify(coordsObj));
}
function getWeather(lat,lng){
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
}
function handleCeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleCeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedcords = localStorage.getItem(COORDS);
    if(loadedCoords ===null){
        askForCoords();
    }
    else{}
}


function init(){

}
init