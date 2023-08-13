document.getElementById('address-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);    
    
    formData.forEach((value, key) => {
        localStorage.setItem(key, value);
    });
    
    
    const redirectURL = 'payment-confirm.html';
    window.location.href = redirectURL;
});