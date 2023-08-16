import API from "../../../service/data/data";

export class RegisterController {
    constructor() {
        this.apiLogin = new API("http://localhost/signup");
    }

    
    

    async sendSignUp() {
        const self = this;
        document.getElementById('signup-form').addEventListener('submit', async function (event) {
            event.preventDefault();
            const emailElement = document.getElementById('email').value;
            if (!isValidEmail(emailElement)) {
                alert('Por favor, insira um email válido.');
                return;
            }
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
            }).then((value) => {
                if (value['message'] === "User created successfully!") {
                    window.location.href = 'http://127.0.0.1:5501/frontend/src/views/home/html/index.html';
                }
            })
            event.preventDefault();
        });
    }

    async init() {
        await this.sendSignUp();
    }
}


function isValidEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(email);
}