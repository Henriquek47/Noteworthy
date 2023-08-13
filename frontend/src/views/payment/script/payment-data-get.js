window.onload = function() {
    document.getElementById('city').value = localStorage.getItem('city');
    document.getElementById('neighborhood').value = localStorage.getItem('neighborhood');
    document.getElementById('street').value = localStorage.getItem('street');
    document.getElementById('number').value = localStorage.getItem('number');
    document.getElementById('cep').value = localStorage.getItem('cep');
    document.getElementById('complement').value = localStorage.getItem('complement');
};
