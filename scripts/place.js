// =========================================
// WDD 131 - Place Page
// place.js
// =========================================

// ---------- Footer ----------

// Current Year
const year = document.getElementById("currentyear");
year.textContent = new Date().getFullYear();

// Last Modified Date
const modified = document.getElementById("lastModified");
modified.textContent = `Last Modified: ${document.lastModified}`;


// ---------- Weather Variables ----------

// Static values for this assignment

const temperature = 8;     // Celsius
const windSpeed = 12;      // km/h


// ---------- Wind Chill Function ----------

function calculateWindChill(temp, speed) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}


// ---------- Wind Chill Display ----------

const windChill = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {

    windChill.textContent =
        `${calculateWindChill(temperature, windSpeed)} °C`;

} else {

    windChill.textContent = "N/A";

}