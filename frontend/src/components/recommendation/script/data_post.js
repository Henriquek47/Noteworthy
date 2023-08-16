export  function createPost(post){
    const postContainer = document.getElementById('postContainer');
    postContainer.appendChild(createTemplate(post));
}


function createTemplate(post){
    console.log(post.id);
    const template = document.createElement('template');
        template.innerHTML = `
        <hr class="separator">    
        <div class="content"> 
            <div class="photo">
            <a href="../../../views/details/html/details.html?id=${post.id}">
                <img src="http://localhost/post/${post.id}/image" alt="${post.instrument}" crossorigin="anonymous">
                </a>
            </div>
            <div class="info">
                <h3 class="rec-title">${post.title}</h3>
                <p class="announcer"><span>Anunciante:</span> ${post.authorId}</p>
                <p class="grey-text">Endereço: ${post.address != null ? post.address.city : 'Endereço não informado'}</p>
            </div>
            <div class="info2">
                <h3 class="price">R$${post.price}</h3>
                <div class="buttons">
                    <button class="btn-comprar">Comprar</button>
                    <button class="btn-details">Ver detalhes</button>
                </div>                
            </div> 
        </div>`

        return template.content;
}