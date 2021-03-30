const toDoForm = document.querySelector(".js-toDoform"),
toDoinput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODO_LS ="toDo";
let toDo=[];


function deleteTodo(event){
const btn = event.target;
const li = btn.parentNode;
toDoList.removeChild(li);
const cleanTodo = toDo.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
});
toDo = cleanTodo;
saveTodo();
}

function saveTodo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}

function painttoDo(text){
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   delBtn.innerText = "❌";
   delBtn.addEventListener("click", deleteTodo);
   const span = document.createElement("span");
   const newId = toDo.length+1;
   span.innerText=text;
   li.appendChild(span);
   li.appendChild(delBtn);
   li.id = newId;
   toDoList.appendChild(li);
   const toDoObj={
       text:text,
       id:newId
   };
   toDo.push(toDoObj);
   saveTodo();
   }

function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoinput.value;
    painttoDo(currentValue);
    toDoinput.value = "";
}
function loadTodo(){
    const loadedtoDo= localStorage.getItem(TODO_LS);
    if(loadedtoDo !==null){
        const parsedTodo=JSON.parse(loadedtoDo);
        parsedTodo.forEach(function(toDo) {
            painttoDo(toDo.text);
          });
    }
}
function init(){
    loadTodo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();