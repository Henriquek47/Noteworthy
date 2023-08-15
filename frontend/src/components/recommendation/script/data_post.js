export  function createPost(){
    const postContainer = document.getElementById('postContainer');
    console.log(postContainer);
    postContainer.appendChild(createTemplate());
}


function createTemplate(){
    const template = document.createElement('template');
        template.innerHTML = `
        <hr class="separator">    
        <div class="content"> 
            <div class="photo">
                <img src="../../../assets/imgs/image2.png" alt="Guitarra" crossorigin="anonymous">
            </div>
            <div class="info">
                <h3 class="rec-title">Guitarra Stratocaster</h3>
                <p class="announcer"><span>Anunciante:</span> Diego Candido</p>
                <p class="grey-text">Endereço:</p>
            </div>
            <div class="info2">
                <h3 class="price">R$499</h3>
                <div class="buttons">
                    <button class="btn-comprar">Comprar</button>
                    <button class="btn-details">Ver detalhes</button>
                </div>                
            </div> 
        </div>`

        return template.content;
}