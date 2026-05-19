// Form Submit
document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateAll()) {
        const now = new Date();
        document.getElementById("successMessage").innerText =
            "Student Registered Successfully! Time: " + now.toLocaleTimeString();
        this.reset();
        clearErrors();
    }
});

// Validate All Fields
function validateAll() {
    let isValid = true;

    // Name
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required!";
        isValid = false;
    } else if (/[0-9]/.test(name)) {
        document.getElementById("nameError").innerText = "Name cannot contain numbers!";
        isValid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Email
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
        document.getElementById("emailError").innerText = "Email is required!";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email!";
        isValid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Phone
    const phone = document.getElementById("phone").value;
    if (phone.trim() === "") {
        document.getElementById("phoneError").innerText = "Phone is required!";
        isValid = false;
    } else if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").innerText = "Phone must be 10 digits!";
        isValid = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }

    // Course
    const course = document.getElementById("course").value;
    if (course === "") {
        document.getElementById("courseError").innerText = "Please select a course!";
        isValid = false;
    } else {
        document.getElementById("courseError").innerText = "";
    }

    return isValid;
}

// Live Name Validation
document.getElementById("name").addEventListener("input", function() {
    if (/[0-9]/.test(this.value)) {
        document.getElementById("nameError").innerText = "Name cannot contain numbers!";
    } else {
        document.getElementById("nameError").innerText = "";
    }
    document.getElementById("charCount").innerText = "Characters: " + this.value.length;
});

// Live Email Validation
document.getElementById("email").addEventListener("blur", function() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(this.value)) {
        document.getElementById("emailError").innerText = "Enter a valid email!";
    } else {
        document.getElementById("emailError").innerText = "";
    }
});

// Live Phone Validation
document.getElementById("phone").addEventListener("input", function() {
    if (this.value.length !== 10 || isNaN(this.value)) {
        document.getElementById("phoneError").innerText = "Phone must be 10 digits!";
    } else {
        document.getElementById("phoneError").innerText = "";
    }
});

// Clear all errors
function clearErrors() {
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("courseError").innerText = "";
    document.getElementById("charCount").innerText = "";
}