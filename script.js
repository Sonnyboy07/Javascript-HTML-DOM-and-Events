let btn = document.getElementById("addTask");

btn.onclick = function() {
    // Create an li element
    const list = document.createElement("li");

    // Get the input value
    let taskInput = document.getElementById("todoInput").value;

    // Check if the input is empty
    if (String.prototype.trim.call(taskInput) === "") {
        alert("Please input a task.");
        return; // Stop execution if the input is empty
    }

    // Add a delete button (x button) to the li element
    const deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm";
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
        // Remove the parent li when the delete button is clicked
        list.remove();
    };

    // Create a span element for the task text
    const taskText = document.createElement("span");
    taskText.textContent = taskInput;

    // Append the input value to the li element
    list.appendChild(taskText);
    list.appendChild(deleteButton);

    // Append the li node to the #taskList
    document.getElementById("taskList").appendChild(list);

    // Clear the input field after adding a task
    document.getElementById("todoInput").value = "";
}