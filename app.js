const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)


function addTodo(event){
    event.preventDefault();
    console.log('test');

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    todoInput.value = "";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    const completedButton = document.createElement('button');
    completedButton.innerText = 'done';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerText = 'trash';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
}

function deleteCheck(e){
    item = e.target;
    if(item.classList[0] === 'trash-btn'){
        item.parentElement.remove();
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}