document.getElementById('contact-button').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default action of the link
    const contactInfo = document.getElementById('contact-info');
    contactInfo.classList.toggle('visible'); // Toggle the 'visible' class to show/hide
});
document.addEventListener('click', (e) => {
    const contactInfo = document.getElementById('contact-info');
    const contactButton = document.getElementById('contact-button');
    if (contactInfo.classList.contains('visible') && 
        !contactInfo.contains(e.target) && 
        e.target !== contactButton) {
        contactInfo.classList.remove('visible');
    }
});