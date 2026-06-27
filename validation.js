document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop form submission processing default loop
        let isValid = true;

        // Fetch DOM Elements References
        const name = document.getElementById('fullName');
        const email = document.getElementById('emailAddress');
        const phone = document.getElementById('phoneNumber');
        const message = document.getElementById('message');

        // Regex configurations
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]+$/;

        // 1. Name Check validation check
        if(name.value.trim() === "") {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('nameError').style.display = 'none';
        }

        // 2. Email formatting validation checks
        if(!emailRegex.test(email.value.trim())) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none';
        }

        // 3. Digit matching only verification block checking logic patterns
        if(!phoneRegex.test(phone.value.trim())) {
            document.getElementById('phoneError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('phoneError').style.display = 'none';
        }

        // 4. Message empty field state verification
        if(message.value.trim() === "") {
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        } else {
            document.getElementById('messageError').style.display = 'none';
        }

        // Complete authorization sequence validation verification confirmation alert
        if(isValid) {
            alert('Form entries verified successfully! System ready for academic transfer routing.');
            form.reset();
        }
    });
});