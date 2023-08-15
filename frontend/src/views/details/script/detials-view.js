export function createDetails(details) {
    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.appendChild(createTemplate(details));
}


function createTemplate(details) {
    console.log(`${details.title}`)
    const template = document.createElement('template');
    template.innerHTML = `
        <div class="container">
            <div class="img-background">
                <img src="http://localhost/post/${details.id}/image" alt="Guitarra" crossorigin="anonymous">
            </div>
            <div class="info-wrapper">
                <div class="info">
                    <h2>${details.title}</h2>
                    <p id="address">${details.address == null ? 'Endereço não especificado' : details.address.city}</p>
                    <p id="announcer-name"><span>Anunciante:</span> ${details.authorId}</p>
                </div>
                <div class="info2">
                    <h2>R$${details.price}</h2>
                    <button onclick="handlePayment()" class="buy">Comprar</button>
                </div>
            </div>
            <div class="description-container">
                <p class="description-title">Descrição:</p>
                <p class="description">${details.description}</p>
            </div>
            
        </div>`

    return template.content;
}