/**
 * The Blog Site - Group 1.0
 * External JavaScript File
 */

document.addEventListener("DOMContentLoaded", () => {
    // ----------------------------------------------------------------------
    // Form Validation for Contact Page
    // ----------------------------------------------------------------------
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent actual form submission for demo

            let isValid = true;

            // Validate Full Name
            const nameInput = document.getElementById("name");
            const nameGroup = nameInput.parentElement;
            if (nameInput.value.trim() === "") {
                nameGroup.classList.add("error");
                isValid = false;
            } else {
                nameGroup.classList.remove("error");
            }

            // Validate Email
            const emailInput = document.getElementById("email");
            const emailGroup = emailInput.parentElement;
            if (!validateEmail(emailInput.value.trim())) {
                emailGroup.classList.add("error");
                isValid = false;
            } else {
                emailGroup.classList.remove("error");
            }

            // Validate Message
            const messageInput = document.getElementById("message");
            const messageGroup = messageInput.parentElement;
            if (messageInput.value.trim() === "") {
                messageGroup.classList.add("error");
                isValid = false;
            } else {
                messageGroup.classList.remove("error");
            }

            // If form is valid, show success message
            if (isValid) {
                const successMsg = document.getElementById("successMessage");
                successMsg.classList.add("visible");

                // Reset form fields
                contactForm.reset();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.classList.remove("visible");
                }, 5000);
            }
        });
    }

    /**
     * Helper to validate email format using Regex
     * @param {string} email 
     * @returns {boolean}
     */
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
