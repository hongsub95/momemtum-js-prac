const toDoForm = document.querySelector(".js-toDoForm"),
toDoinput = toDoForm.querySelector("input"),
toDoList = document.querySelector(".js-toDoList");

const TODO_LS = 'toDo';
const toDo=[];
function deleteTodo(event){
const btn = event.target;
const li = btn.parentNode;
toDoList.removeChild(li);
const cleanTodo = todo.filter()
}
function saveTodo(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}
function painttoDo(text){
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   delBtn.innerText = "❌";
   delBtn.addEventListener("click", deleteTodo)
   const span = document.createElement("span");
   const newId = toDo.length+1;
   span.innerText=text;
   li.appendChild(span);
   li.appendChild(delBtn);
   toDoList.appendChild(li);
   const toDoOj={
       text:text,
       id: newId
   };
   toDo.push(toDo);
   }

function handleSubmit(event){
    event.preventDefault();
    const currentValue=todoinput.value;
    painttoDo(currentValue);
    todoinput.value = "";
}
function loadTodo(){
    const loadedtoDo= localStorage.getItem(TODO_LS);
    if(loadedtoDo!==null){
        console.log(ladedTodo);
        const parsedToDo=JSON.parse(loadedtodo);
        parsedToDos.forEach(function(todo) {
            paintTodo(todo.text);
          });
    }
}
function init(){
    loadTodo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();