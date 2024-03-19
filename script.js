//declare main variables

let toggleTheme = document.querySelector(".toggle-theme")
let tbody = document.querySelector("#tbody");
let textBox = document.querySelector("#textBox");
let addBtn = document.querySelector("#addBtn");

//Preload task
let tasks = [
   {
    text: "Wake up at 6:30 AM.",
    completed: false
   },
   {
    text: "Check emails",
    completed: false
   },
   {
    text: "Code Review",
    completed: false
   }

]

//Add a task
addBtn.addEventListener("click", function () {
    const newTask = textBox.value.trim();
    if(newTask) {
        tasks.push({text: newTask, completed: false});
        listAllTasks();
        textBox.value = ''; 
    } else {
        alert("Please enter a task.");
    }
})


//A function to invoke to delete/remove a task
function removeTask(index) {
    tbody.innerHTML = "";
    tasks.splice(index, 1);
    listAllTasks();
   
}


//render or list all tasks on the page
function listAllTasks() {
    tbody.innerHTML = "";
    //check if the .table class has a night class
    const isNightMode = document.querySelector(".table").classList.contains("night");
    tasks.map( function(task, index) {
        const tr = document.createElement('tr');

        tr.setAttribute('id', 'task-'+ index);
    
        tr.innerHTML = 
        `
        <td class="tdata"> <input type="checkbox" id="checkbox-${index}" ${task.completed ? 'checked' : ''}> </td>
        <td class="tdata">${task.text}</td>
        <td class="tdata">
            <p class="status ${task.completed ? 'completed' : 'in-progress'}" id="status-${index}">${task.completed ? 'Completed' : 'In progress'}</p>
        </td class="tdata">   
        <td class="tdata"> 
            <i class="fa-solid fa-square-xmark del" onClick="removeTask(${index})"></i>
        </td>
    
        `;

        //ensures that td will also be in night mode if the variable isNightMode has a class of night
        if (isNightMode) {
            tr.querySelectorAll("td").forEach(function(td) {
                td.classList.add("night");
            })
        }
    
        tbody.appendChild(tr);

        // Add an event listener to the checkbox to toggle task status
        document.getElementById(`checkbox-${index}`).addEventListener('change', function(event) {
            const checkbox = event.target; // Access the triggering checkbox directly via event.target
            const statusText = document.getElementById(`status-${index}`);
            task.completed = !task.completed;
            if(checkbox.checked) {
                statusText.textContent = 'Completed';
                statusText.classList.remove('in-progress');
                statusText.classList.add('completed');
            } else {
                statusText.textContent = 'In progress';
                statusText.classList.remove('completed');
                statusText.classList.add('in-progress');
            }
        });

    })
}




listAllTasks();


//Toogle theme feature
toggleTheme.addEventListener("click", function() {
    if (document.querySelector(".sun").style.display == "none") {
        document.querySelector(".sun").style.display = "block";
        document.querySelector(".moon").style.display = "none";

    } else {
        document.querySelector(".sun").style.display = "none";
        document.querySelector(".moon").style.display = "block";
        
    }

    document.querySelector(".table").classList.toggle("night");
    document.querySelector(".table__header").classList.toggle("night");

    document.querySelectorAll(".theader").forEach(function(element) {
        element.classList.toggle("night");
      });

    document.querySelectorAll(".tdata").forEach(function(element) {
        element.classList.toggle("night");
      });
    
})