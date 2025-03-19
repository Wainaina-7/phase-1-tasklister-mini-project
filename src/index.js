document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");  // Correct ID to match the HTML

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskDescription = document.getElementById("new-task-description").value;

    if (taskDescription !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        taskItem.remove();
      });

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      document.getElementById("new-task-description").value = "";
    }
  });
});
