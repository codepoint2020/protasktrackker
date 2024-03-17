let toggleTheme = document.querySelector(".toggle-theme")
let tbody = document.querySelector("#tbody");
let textBox = document.querySelector("#textBox");
// const deleteTask = document.querySelector(".del");


let addBtn = document.querySelector("#addBtn");

let tasks = [
   {
    text: "Wake up at 6:30 AM.",
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
    // const isNightMode = document.querySelectorAll(".table").classList.contains("night");
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

        // if (isNightMode) {
        //     tr.querySelectorAll("td").forEach(function(td) {
        //         td.classList.add("night");
        //     })
        // }
    
        tbody.appendChild(tr);

        // Add an event listener to the checkbox to toggle task status
        document.getElementById(`checkbox-${index}`).addEventListener('change', function() {
            const statusText = document.getElementById(`status-${index}`);
            task.completed = !task.completed;
            if(this.checked) {
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