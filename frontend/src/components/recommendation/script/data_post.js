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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHSJsQiez78jIXhwnntiIEsfM3_Dpj0I23_pRanEQRUqqvvHaJ_V4Iwc-312TxL4WJSto&usqp=CAU" alt="${post.instrument}" crossorigin="anonymous">
                </a>
            </div>
            <div class="info">
                <h3 class="rec-title">${post.title}</h3>
                <p class="announcer"><span>Anunciante:</span> ${post.authorName}</p>
                <p class="grey-text">Endereço: ${post.address != null ? post.address.city : 'Endereço não informado'}</p>
            </div>
            <div class="info2">
                <h3 class="price">R$${post.price}</h3>
                <div class="buttons">
                    <button class="btn-comprar">Comprar</button>
                    <button class="btn-details" onclick="window.location.href='../../../views/details/html/details.html?id=${post.id}&user_id=${post.authorId}'">Ver detalhes</button>
                </div>                
            </div> 
        </div>`

        return template.content;
}