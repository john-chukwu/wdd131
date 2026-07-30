// Retrieve the current review count from localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increment the review count
reviewCount++;

// Store the updated count
localStorage.setItem("reviewCount", reviewCount);

// Display the updated count
document.querySelector("#reviewCount").textContent = reviewCount;