import API from "../../../service/data/data";

export class RegisterController {
    constructor() {
        this.apiLogin = new API("http://localhost/login");
    }

    async sendSignUp() {
        const self = this;
        document.getElementById('signup-form').addEventListener('submit', async function (event) {
            // Evita que o formulário seja enviado e a página seja recarregada
            event.preventDefault();
            const emailElement = document.getElementById('email').value;
            const nomeElement = document.getElementById('nome').value;
            const bairroElement = document.getElementById('bairro').value;
            const ruaElement = document.getElementById('rua').value;
            const estadoElement = document.getElementById('estado').value;
            const numeroElement = document.getElementById('numero').value;
            const senhaElement = document.getElementById('senha').value;
            await self.apiLogin.postData({
                'profilePicture': null,
                'username': nomeElement,
                'email': emailElement,
                'password': senhaElement,
                'address': {
                    'street': ruaElement,
                    'city': senhaElement,
                    'state': estadoElement,
                    'neighborhood': bairroElement,
                    'number': numeroElement,
                    'complement': '',
                },
            })
            event.preventDefault();
        });
    }

    async init() {
        await this.sendSignUp();
    }
}
