import API from "../../../service/data/data";

export class LoginController {
    constructor() {
        this.apiLogin = new API("http://localhost/login");
    }

    async sendSignUp() {
        const self = this;
        document.getElementById('login-form').addEventListener('submit', async function (event) {
            event.preventDefault();
            const emailElement = document.getElementById('email').value;
            const senhaElement = document.getElementById('senha').value;
            await self.apiLogin.postData({
                'email': emailElement,
                'password': senhaElement,
            }).then((value) => {
                if(value['message'] === "Login successful!"){
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
