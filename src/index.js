document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.querySelector("#create-task-form")
    taskForm.addEventListener("submit", e => {
      e.preventDefault()
      eventToDo(e.target.querySelector("#new-task-description").value)
    taskForm.reset()
    })
});
function eventToDo(e) {
  let li = document.createElement('li')
  li.textContent = e
    let deleteButton = document.createElement('button')
    deleteButton.textContent = "x"
    deleteButton.addEventListener('click', deleteTask)
  li.appendChild(deleteButton)
  document.querySelector('#tasks').appendChild(li)

}

function deleteTask(e) {
e.target.parentNode.remove()
}