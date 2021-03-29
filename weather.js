const COORDS = 'coords'

function saveCoords(coords){
    localStorage.setItem(COORD,JSON.stringify(coordsObj));
}

function handleCeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coords);
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