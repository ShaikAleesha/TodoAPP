// Get the input box element where users type tasks
const inputbox = document.getElementById("input-box");

// Get the container where all tasks will be displayed
const listContainer = document.getElementById("list-container");

// Function to add a new task
function AddTask() {
  // Check if the input is empty
  if (inputbox.value === '') {
    alert('You must write something'); // Alert if input is empty
  } else {
    // Create a new <li> element for the task
    let li = document.createElement("li");

    // Set the task text to what the user typed
    li.innerHTML = inputbox.value;

    // Add the <li> to the list container
    listContainer.appendChild(li);

    // Create a <span> element to hold the '×' (delete) icon
    let span = document.createElement("span");

    // Use Unicode character for ×
    span.innerHTML = '\u00d7';

    // Append the delete icon to the <li>
    li.appendChild(span);
  }

  // Clear the input box after adding the task
  inputbox.value = '';

  // Save the updated list to local storage
  saveData();
}

// Add a click listener to the list container
listContainer.addEventListener("click", function(e) {
  // Check if the clicked element is a <li> (a task)
  if (e.target.tagName === "LI") {
    // Toggle the "checked" class to mark it as completed or not
    e.target.classList.toggle("checked");

    // Save the updated list state
    saveData();
  }

  // Check if the clicked element is a <span> (the delete icon)
  else if (e.target.tagName === "SPAN") {
    // Remove the parent <li> element (the task)
    e.target.parentElement.remove();

    // Save the updated list state
    saveData();
  }
}, false);

// Function to save the current tasks to localStorage
function saveData() {
  // Save the entire list's innerHTML as a string in localStorage
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show saved tasks when page reloads
function showTask() {
  // Load saved list from localStorage and set it in the list container
  listContainer.innerHTML = localStorage.getItem("data");
}

// Call the showTask function when the script loads
showTask();
