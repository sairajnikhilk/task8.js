<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Advanced To-Do App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1>👉 My To-Do List</h1>

        <div class="input-section">
            <input type="text" id="taskInput" placeholder="Enter your task...">
            <button id="addBtn">Add</button>
        </div>

        <ol id="taskList"></ol>
    </div>

    <script src="Todo.js"></script>
</body>
</html>


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

/* Body Styling */
body {
    background: linear-gradient(135deg, #e1efc3, #daecc0);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Main Container */
.container {
    background: rgb(216, 226, 134);
    width: 400px;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    text-align: center;
}

.container h1 {
    margin-bottom: 20px;
    color: #333;
}

/* Input Section */
.input-section {
    display: flex;
    gap: 10px;
}

#taskInput {
    flex: 1;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 8px;
    outline: none;
    transition: 0.3s;
}

#taskInput:focus {
    border-color: #667eea;
}

/* Button Styling */
#addBtn {
    padding: 10px 15px;
    background-color: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
}

#addBtn:hover {
    background-color: #5563c1;
}

/* List Styling */
#taskList {
    margin-top: 20px;
    text-align: left;
}

.task-item {
    background: #f4f4f4;
    padding: 10px;
    margin: 8px 0;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.task-item:hover {
    background-color: #e0e7ff;
}

/* Delete Button */
.delete-btn {
    background: red;
    color: white;
    border: none;
    padding: 5px 8px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
}

.delete-btn:hover {
    background: darkred;
}

/* Fade Out Animation */
.fade-out {
    opacity: 0;
    transform: translateX(100px);
    transition: 0.4s;
}


// DOM SELECTION


const input = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#taskList");

// ==========================
// ADD TASK FUNCTION
// ==========================

function addTask() {

    const taskValue = input.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // Create li element
    const li = document.createElement("li");
    li.setAttribute("class", "task-item");
    li.innerText = taskValue;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.setAttribute("class", "delete-btn");

    // Append delete button inside li
    li.append(deleteBtn);

    // Append li to list
    list.append(li);

    // REMOVE TASK


    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // prevent triggering li click

        li.classList.add("fade-out");

        setTimeout(function () {
            li.remove();
        }, 400);
    });

    // Mark as completed on click
    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
        li.style.backgroundColor = "#d1fae5";
    });

    // Clear input
    input.value = "";
}


// EVENT HANDLING


// Button click
button.addEventListener("click", addTask);

// Enter key support
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
