// Select the HTML elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Create a list item
const li = document.createElement("li");

// Create a delete button
const deleteButton = document.createElement("button");

// Add the input value to the list item
li.textContent = input.value;

// Set the delete button text
deleteButton.textContent = "❌";

// Add an accessibility label
deleteButton.setAttribute("aria-label", "Remove chapter");

// Append the delete button to the list item
li.append(deleteButton);

// Append the list item to the unordered list
list.append(li);