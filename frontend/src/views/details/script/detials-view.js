export  function createPost(details){
    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.appendChild(createTemplate(details));
}


function createTemplate(details){
    console.log(`${details.title}`)
    const template = document.createElement('template');
        template.innerHTML = `
        <div class="container">
            <div class="img-background">
                <img src="../../../assets/imgs/image2.png" alt="Guitarra">
            </div>
            <div class="info-wrapper">
                <div class="info">
                    <h2>Fender Stratocaster</h2>
                    <p id="address">BAHIA, Feira de Santana, DDD 75</p>
                    <p id="announcer-name"><span>Anunciante:</span> Daniel Santos</p>
                </div>
                <div class="info2">
                    <h2>R$549,00</h2>
                    <button onclick="handlePayment()" class="buy">Comprar</button>
                </div>
            </div>
            <p id="description-title">Descrição:</p>
            <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            
        </div>`

        return template.content;
}