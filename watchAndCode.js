var todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        console.log(completedTodos);
        if (completedTodos === totalTodos) {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        }
        else {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
};

var handlers = {
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    },
    addTodo: function() {
        var addTodoInput = document.getElementById("add-todo-input");
        todoList.addTodo(addTodoInput.value);
        addTodoInput.value = "";
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("change-todo-position-input");
        var changeTodoTextInput = document.getElementById("change-todo-text-input");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("delete-todo-position-input");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompleted = document.getElementById("toggle-completed");
        todoList.toggleCompleted(toggleCompleted.valueAsNumber);
        toggleCompleted.value = "";
        view.displayTodos();
    }
};

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement("li");
            var todo = todoList.todos[i];
            var todoTextWithCompletion = "";
            
            if (todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText;
            } else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }
            
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};
