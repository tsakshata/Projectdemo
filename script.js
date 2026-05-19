const form = document.getElementById("studentForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    successMessage.innerText =
        "Student Registered Successfully!";

    form.reset();

});