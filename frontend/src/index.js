import toggleDropdown, { logout, toggleDropdownMenu } from "./components/nav/script/dropdown.js";
import expandedSearch from "./components/nav/script/expanded-search.js";
import API from "./service/data/data.js";

class Index {
    constructor() {
        this.apiToken = new API("http://localhost/verify-token");
        this.apiLogout = new API("http://localhost/logout");
        this.loadNavBar('nav-bar', 'nav')
        this.loadControllerForCurrentPage();
    }


    async authVerify(pageName) {
        var isLoggin = false;
        const token = await this.apiToken.getData();
        const login = document.querySelector('.login a');
        console.log(token);
        if(token['error'] === 'Token not provided.' || token['error'] === 'Invalid token.' ){
            login.textContent = 'Login';
            login.href = 'http://127.0.0.1:5501/frontend/src/views/login/html/login.html'
            isLoggin = false;
        }else{
            login.textContent = 'Sair';
            login.href = 'http://127.0.0.1:5501/frontend/src/views/login/html/login.html'
            isLoggin = true;
        }
        if (pageName === 'announcement' && isLoggin === false) {
            window.location.href = 'http://127.0.0.1:5501/frontend/src/views/home/html/index.html';
            return false;
        } else if((pageName === 'register' || pageName === 'login') && isLoggin === true){
            window.location.href = 'http://127.0.0.1:5501/frontend/src/views/home/html/index.html';
            return false;
        }
        return true;
    }

    async loadControllerForCurrentPage() {
        // Pegue o nome do controlador do atributo data-controller no elemento body
        let controllerName = document.body.dataset.controller;

        if(controllerName){
            const check = await this.authVerify(controllerName);
            if(check){
                await this.loadController(controllerName);
            }
        } else {
            console.error(`Não foi possível encontrar o nome do controlador na página atual.`);
        }
    }


    async loadController(pageName) {
        // Nota: Estamos retornando a promessa aqui
        try {
            const module = await import(`./views/${pageName}/script/${pageName}_controller.js`);
            // Cria uma nova instância do controlador
            this[`${pageName}Controller`] = new module[`${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Controller`]();
            return this[`${pageName}Controller`].init();
        } catch (err) {
            console.error(`Erro ao carregar o controlador ${pageName}: `, err);
        }
    }


    async loadNavBar(componentName, pathName) {
        const componentsPath = "../../../components";
    
        this.loadStylesheet(componentsPath, pathName, componentName);
        await this.loadHTML(componentsPath, pathName, componentName);
        
        toggleDropdown();
        toggleDropdownMenu();
        expandedSearch();
        logout(this.apiLogout)
    }
    
    loadStylesheet(componentsPath, pathName, componentName) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `${componentsPath}/${pathName}/style/${componentName}.css`;
        document.head.appendChild(link);
    }
    
    async loadHTML(componentsPath, pathName, componentName) {
        try {
            const response = await fetch(`${componentsPath}/${pathName}/html/${componentName}.html`);
            if (response.status !== 200) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            const html = await response.text();
            document.getElementById(componentName).innerHTML = html;
        } catch (err) {
            console.error(`Erro ao carregar HTML do componente ${componentName}: `, err);
        }
    }
    

}

document.addEventListener("DOMContentLoaded", () => {
    new Index();
});
