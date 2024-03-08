document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("todo-input");
    const addButton = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener("click", function() {
        const todoText = inputField.value.trim();
        if (todoText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = todoText;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            deleteButton.classList.add("delete-btn");
            deleteButton.addEventListener("click", function() {
                listItem.remove();
            });
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);
            inputField.value = "";
        } else {
            alert("Please enter a todo!");
        }
    });
});
