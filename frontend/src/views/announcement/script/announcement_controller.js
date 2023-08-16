import API from "../../../service/data/data";

export class AnnouncementController {
    constructor() {
        this.apiPost = new API("http://localhost/post");
        this.apiToken= new API("http://localhost/verify-token");
    }

    async sendAnnouncement() {
        const self = this;
        document.getElementById('announcement-form').addEventListener('submit', async function (event) {
            event.preventDefault();
            console.log('teste');
            const user = await self.apiToken.getData();
            const produtoElement = document.getElementById('produto').value;
            const descricaoElement = document.getElementById('descricao').value;
            const instrumentoElement = document.getElementById('instrumento').value;
            const precoElement = document.getElementById('preco').value;
            const tipoEnvioElement = document.getElementById('tipo-envio').value;
            await self.apiPost.post({
                'title': produtoElement,
                'pictures': null,
                'description': descricaoElement,
                'authorId': 1,
                'authorName': user['user']['username'],
                'instrument': instrumentoElement,
                'price': precoElement,
                'shipping': tipoEnvioElement,
                'status': true,
            }).then((value) => {
                if(value['message'] === "Post created successfully!"){
                    window.location.href = 'http://127.0.0.1:5501/frontend/src/views/home/html/index.html';
                }
            })
            event.preventDefault();
        });
    }

    async init() {
        await this.sendAnnouncement();
    }
}
