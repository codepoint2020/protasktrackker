function listAllTasks() {
    tbody.innerHTML = "";
    tasks.forEach(function(task, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="tdata"> <input type="checkbox" id="checkbox-${index}" ${task.completed ? 'checked' : ''}> </td>
            <td class="tdata">${task.text}</td>
            <td class="tdata">
                <p class="status ${task.completed ? 'completed' : 'in-progress'}" id="status-${index}">${task.completed ? 'Completed' : 'In progress'}</p>
            </td>   
            <td class="tdata"> 
                <i class="fa-solid fa-square-xmark del" onClick="removeTask(${index})"></i>
            </td>
        `;

        tbody.appendChild(tr);

        // Add an event listener to the checkbox to toggle task status
        document.getElementById(`checkbox-${index}`).addEventListener('change', function() {
            const statusText = document.getElementById(`status-${index}`);
            task.completed = !task.completed; // Toggle the completed status in the tasks array
            if (this.checked) {
                statusText.textContent = 'Completed';
                statusText.classList.remove('in-progress');
                statusText.classList.add('completed');
            } else {
                statusText.textContent = 'In progress';
                statusText.classList.remove('completed');
                statusText.classList.add('in-progress');
            }
        });
    });
}
