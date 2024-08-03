// Get the form element
const form = document.getElementById('contact-form');

// Add an event listener to the form to capture the submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Capture input values
    const name = document.getElementById('name').value;
    
    // Clear the input fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    
    // Show a thank you message
    const output = document.getElementById('output');
    output.textContent = `Thank you, ${name}! We've received your message and will get back to you shortly.`;
    output.style.color = '#27ae60'; // Optional: Style the message (green color for success)
    output.style.marginTop = '20px'; // Optional: Add some margin to the top for spacing
});


//popup article

