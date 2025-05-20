// Contact form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // In a real app, you would send this data to a server
    console.log('Form submitted:', formData);
    
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
});