// Select button
const button = document.querySelector("button");

// Create message element
const message = document.createElement("p");

// Add click event
button.addEventListener("click", () => {

    // Change card background color
    const card = document.querySelector(".card");
    card.style.backgroundColor = "#f0f8ft";

    // Add message text
    message.innerText = "Welcome to the Card Component";
    message.style.color = "green";
    message.style.marginTop = "10px";

    // Append message inside card
    card.appendChild(message);

    // Change button text
    button.innerText = "Opened";
});