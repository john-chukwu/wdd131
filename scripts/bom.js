// Select the HTML elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Add a click event listener to the button
button.addEventListener("click", function () {

    // Check that the input is not blank
    if (input.value.trim() !== "") {

        // Create a list item
        const li = document.createElement("li");

        // Create a delete button
        const deleteButton = document.createElement("button");

        // Set the chapter text
        li.textContent = input.value;

        // Set the delete button text
        deleteButton.textContent = "❌";

        // Accessibility label
        deleteButton.setAttribute(
            "aria-label",
            `Remove ${input.value}`
        );

        // Add the delete button to the list item
        li.append(deleteButton);

        // Add the list item to the list
        list.append(li);

        // Delete the chapter when the X is clicked
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        // Clear the input field
        input.value = "";

        // Return the cursor to the input
        input.focus();
    } else {

        // Keep the cursor in the input if nothing was entered
        input.focus();
    }
});