// Display destination cards
function displayDestinations(destinationList, containerId) {

    const container = document.querySelector(containerId);

    if (!container) return;

    container.innerHTML = "";

    destinationList.forEach(destination => {

        const card = document.createElement("article");

        card.classList.add("card");

        card.innerHTML = `
            <img
                src="${destination.image}"
                alt="${destination.name}"
                width="800"
                height="600"
                loading="lazy">

            <div class="card-content">

                <h3>${destination.name}</h3>

                <p><strong>Location:</strong> ${destination.location}</p>

                <p><strong>Category:</strong> ${destination.category}</p>

                <p>${destination.description}</p>

                <button
                    class="button favorite-btn"
                    data-id="${destination.id}">
                    Save as Favorite
                </button>

            </div>
        `;

        container.appendChild(card);

    });

    addFavoriteEvents();

}

// Add click events to all favorite buttons
function addFavoriteEvents() {

    const buttons = document.querySelectorAll(".favorite-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const id = Number(button.dataset.id);

            const favorite = destinations.find(destination => destination.id === id);

            if (favorite) {

                localStorage.setItem(
                    "favoriteDestination",
                    JSON.stringify(favorite)
                );

                alert(`${favorite.name} has been saved as your favorite destination!`);

            }

        });

    });

}

// Display the saved favorite destination
function displayFavorite() {

    const favoriteSection = document.querySelector("#favorite");

    if (!favoriteSection) return;

    const savedFavorite = localStorage.getItem("favoriteDestination");

    if (savedFavorite) {

        const destination = JSON.parse(savedFavorite);

        favoriteSection.innerHTML = `
            <h2>Your Favorite Destination</h2>

            <div class="card">

                <img
                    src="${destination.image}"
                    alt="${destination.name}"
                    width="800"
                    height="600"
                    loading="lazy">

                <div class="card-content">

                    <h3>${destination.name}</h3>

                    <p>${destination.description}</p>

                </div>

            </div>
        `;

    } else {

        favoriteSection.innerHTML = `
            <h2>Your Favorite Destination</h2>

            <p>You haven't selected a favorite destination yet.</p>
        `;

    }

}

// Home page
displayDestinations(destinations, "#featured");

// Destinations page
displayDestinations(destinations, "#destination-list");

// Travel Planner page
displayFavorite();

// Filter destinations by category
const category = document.querySelector("#category");

if (category) {

    category.addEventListener("change", () => {

        if (category.value === "All") {

            displayDestinations(
                destinations,
                "#destination-list"
            );

        } else {

            const filtered = destinations.filter(destination =>
                destination.category === category.value
            );

            displayDestinations(
                filtered,
                "#destination-list"
            );

        }

    });

}

// Travel planner form
const form = document.querySelector("#travel-form");

if (form) {

    form.addEventListener("submit", event => {

        event.preventDefault();

        const name = document.querySelector("#fullname").value;
        const email = document.querySelector("#email").value;
        const destination = document.querySelector("#destination").value;
        const month = document.querySelector("#month").value;
        const comments = document.querySelector("#comments").value;

        const summary = document.querySelector("#trip-summary");

        summary.innerHTML = `
            <h2>Your Travel Plan</h2>

            <div class="card">

                <div class="card-content">

                    <p><strong>Name:</strong> ${name}</p>

                    <p><strong>Email:</strong> ${email}</p>

                    <p><strong>Destination:</strong> ${destination}</p>

                    <p><strong>Travel Month:</strong> ${month}</p>

                    <p><strong>Notes:</strong> ${comments || "No additional notes provided."}</p>

                </div>

            </div>
        `;

        localStorage.setItem(
            "travelPlan",
            JSON.stringify({
                name,
                email,
                destination,
                month,
                comments
            })
        );

        form.reset();

    });

}

// Mobile navigation menu
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        const expanded = navigation.classList.contains("open");

        menuButton.setAttribute("aria-expanded", expanded);

    });

}

// Display saved travel plan
const tripSummary = document.querySelector("#trip-summary");
const savedPlan = JSON.parse(localStorage.getItem("travelPlan"));

if (tripSummary && savedPlan) {

    tripSummary.innerHTML = `
        <h2>Your Saved Travel Plan</h2>

        <div class="card">

            <div class="card-content">

                <p><strong>Name:</strong> ${savedPlan.name}</p>

                <p><strong>Email:</strong> ${savedPlan.email}</p>

                <p><strong>Destination:</strong> ${savedPlan.destination}</p>

                <p><strong>Travel Month:</strong> ${savedPlan.month}</p>

                <p><strong>Notes:</strong> ${savedPlan.comments || "No additional notes provided."}</p>

            </div>

        </div>
    `;

}