
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value;
    const selectedEvent = document.getElementById("event").value;

    if (!name || !email || !phone || !selectedEvent) {
        message.style.color = "red";
        message.textContent = "Please complete all fields.";
        return;
    }

    message.style.color = "green";
    message.textContent =
        "Registration successful! Welcome, " + name + ".";

    console.log({
        name: name,
        email: email,
        phone: phone,
        event: selectedEvent
    });

    form.reset();
});
