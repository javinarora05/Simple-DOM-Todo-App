let inputValue = document.getElementById("inputValue");
let todoElem = document.querySelector(".todo-lists-elem");
     

 const getTodoListFromLocal = () => {
      return  JSON.parse(localStorage.getItem("TodoList"));
    }

    const addTodoListLocalStorage = (localTodoLists) => {
        return localStorage.setItem("TodoList" , JSON.stringify(localTodoLists));
    }

let localTodoLists = getTodoListFromLocal() || [];

    const addTodoDynamicElement = (curElem) => {
        const divElement = document.createElement('div');
    divElement.classList.add("main_todo_div");
    divElement.innerHTML = `<li> ${curElem}</li> <button class="deleteBtn">Delete Button</button `;
    todoElem.append(divElement);
    }

const addTodoList = (e) => {
    e.preventDefault();

    
    const todoListValue = inputValue.value.trim();

    inputValue.value = "";

    if(todoListValue != ""  && !localTodoLists.includes(todoListValue)){

    localTodoLists = getTodoListFromLocal() || [];

    localTodoLists.push(todoListValue);
    localTodoLists = [ ... new Set(localTodoLists)];
    localStorage.setItem("TodoList" , JSON.stringify(localTodoLists));
        console.log(todoListValue);
        console.log(localTodoLists);
    addTodoDynamicElement(todoListValue);

   
    }
   
};

    const showTodoList = () => {
        

        localTodoLists.forEach((curElem) => {
            addTodoDynamicElement(curElem);
        });
    };

   showTodoList();
    
   const removeTodoElem = (e) => {
   
    const todoToRemove = e.target;
    let todoListContent = todoToRemove.previousElementSibling.innerText;
    let parentElem = todoToRemove.parentElement;
     localTodoLists = localTodoLists.filter((curTodo) => {
        return curTodo != todoListContent.toLowerCase();
     });

     addTodoListLocalStorage(localTodoLists);
     parentElem.remove();

     console.log(localTodoLists);
   };

    todoElem.addEventListener("click" , (e) => {
       e.preventDefault();
       if(e.target.classList.contains("deleteBtn")){
        removeTodoElem(e);
       }
    });

    document.querySelector(".btn").addEventListener("click" , (e) => {
       
       addTodoList(e);
    });