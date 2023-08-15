export  function createPost(post){
    const postContainer = document.getElementById('postContainer');
    postContainer.appendChild(createTemplate(post));
}


function createTemplate(post){
    console.log(`${post.title}`)
    const template = document.createElement('template');
        template.innerHTML = `
        <hr class="separator">    
        <div class="content"> <div class="photo">
        <img src="http://localhost/post/${post.id}/image" alt="${post.instrument}" crossorigin="anonymous">
    </div>
    <div class="info">
        <h3>${post.title}</h3>
        <p class="grey-text">${post.address == null ? 'Endereço não especificado' : post.address.city}</p>
    </div>
    <div class="info2">
        <h3 class="price">${post.price} R$</h3>
        <button class="btn-comprar">Comprar</button>
    </div> </div>`

        return template.content;
}