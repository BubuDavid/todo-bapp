const taskInput = document.getElementById('task-input');
const addBtn    = document.getElementById('add-btn');
const tasks     = document.getElementById('tasks');
const trashBtns  = document.querySelectorAll('.trash__icon')
const checkBtns  = document.querySelectorAll('.check__icon')

addBtn.onclick = function() {
  // Get the input value
  let newTaskText = taskInput.value
  // Create the task html
  let newTask = document.createElement('div');
  newTask.classList.add('task__content');
  newTask.innerHTML = `<i class="uil uil-check task__icon check__icon"></i>
  <p>${newTaskText}</p>
  <i class="uil uil-trash-alt task__icon trash__icon"></i>`
  newTask.children[2].addEventListener('click', deleteTask);
  newTask.children[0].addEventListener('click', checkTask);
  // Set the input value to none and append the task to our tasks container
  taskInput.value = ''
  tasks.append(newTask)
};
// Function to delete tasks
function deleteTask() {
    this.parentNode.remove();
}
// Function to check a task
function checkTask() {
  const parent = this.parentNode;
  let p = parent.children[1];
  let icon = parent.children[0];
  
  ! p.classList.contains('checked')
  ? icon.classList.replace('uil-check', 'uil-eye')
  : icon.classList.replace('uil-eye', 'uil-check');
  
  p.classList.toggle('checked');
}
// Add event for delete to all our tasks
trashBtns.forEach(trash => {
  trash.addEventListener('click', deleteTask);
});
// Add event for check to all our tasks
checkBtns.forEach(check => {
  check.addEventListener('click', checkTask)
});