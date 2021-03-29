const toDoform = document.querySelector(".js-toDoform"),
toDoinput = form.querySelector("input"),
toDoList = document.querySelector(".js-toDoList")
greeting = document.querySelector(".js-greetings");

const USER_LS="currentUser",
SHOWING_CN = "showing";
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
    greeting.classList.add(SHOWING_CN);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();