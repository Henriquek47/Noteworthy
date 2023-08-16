export function createDetails(details) {
    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.appendChild(createTemplate(details));
}


function createTemplate(details) {
    const template = document.createElement('template');
    template.innerHTML = `
        <div class="container">
            <div class="img-background">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSJsQiez78jIXhwnntiIEsfM3_Dpj0I23_pRanEQRUqqvvHaJ_V4Iwc-312TxL4WJSto&usqp=CAU" alt="Guitarra" crossorigin="anonymous">
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
                    <button class="delete">Deletar</button>
                </div>
            </div>
            <div class="description-container">
                <p class="description-title">Descrição:</p>
                <p class="description">${details.description}</p>
            </div>
            
        </div>`

    return template.content;
}