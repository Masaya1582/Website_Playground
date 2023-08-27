const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addButton.addEventListener('click', addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        todoItem.addEventListener('click', toggleComplete);
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
}

function toggleComplete(event) {
    event.target.classList.toggle('completed');
}

todoInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
