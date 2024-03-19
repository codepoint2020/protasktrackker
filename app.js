// Script.js is correctly linked if these variable declarations don't throw any errors in the console.
let toggleTheme = document.querySelector(".toggle-theme");
let tbody = document.querySelector("#tbody");
let textBox = document.querySelector("#textBox");
let addBtn = document.querySelector("#addBtn");


let tasks = [
    { text: "Wake up at 6:30 AM.", completed: false },
    { text: "Check emails", completed: false },
    { text: "Code Review", completed: false }
 ];

 
 function listAllTasks() {
    tbody.innerHTML = ""; // Clear existing tasks

    const isNightMode = document.querySelector(".table").classList.contains("night");
    
    tasks.forEach((task, index) => {
        const tr = document.createElement('tr'); // Create a new row
        tr.innerHTML = `
            <td class="tdata"> <input type="checkbox" id="checkbox-${index}" ${task.completed ? 'checked' : ''}> </td>
            <td class="tdata">${task.text}</td>
            <td class="tdata">
                <p class="status ${task.completed ? 'completed' : 'in-progress'}">${task.completed ? 'Completed' : 'In progress'}</p>
            </td>   
            <td class="tdata"> 
                <i class="fa-solid fa-square-xmark del" onClick="removeTask(${index})"></i>
            </td>
        `;

        if (isNightMode) {
            document.querySelectorAll(".theader, .tdata").forEach(element => {
                element.classList.toggle("night");
            });
        }
       

        tbody.appendChild(tr); // Append the new row to the tbody
        // Inside the tasks.forEach loop in listAllTasks function, right after appending tr to tbody:
    document.getElementById(`checkbox-${index}`).addEventListener('change', function() {
    tasks[index].completed = checkbox.checked; // Update task's completed status based on checkbox
    listAllTasks(); // Refresh the task list to reflect the change
});

    });
}


listAllTasks();

addBtn.addEventListener("click", function() {
    const newTaskText = textBox.value.trim(); // Get and trim the input value
    if (newTaskText) { // Check if the input is not empty
        tasks.push({ text: newTaskText, completed: false }); // Add new task to the tasks array
        listAllTasks(); // Refresh the task list display
        textBox.value = ''; // Clear the input field
    } else {
        alert("Please enter a task."); // Prompt the user to enter a task if input was empty
    }
});


function removeTask(index) {
    tasks.splice(index, 1); // Remove the task at the given index
    listAllTasks(); // Refresh the task list display
}


toggleTheme.addEventListener("click", function() {
    document.querySelector(".table").classList.toggle("night");
    document.querySelector(".table__header").classList.toggle("night");
    
   
    document.querySelector(".sun").style.display = isNightMode ? "none" : "block";
    document.querySelector(".moon").style.display = isNightMode ? "block" : "none";
});
