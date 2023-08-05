import toggleDropdown, { toggleDropdownMenu } from "./components/nav/script/dropdown.js";
import expandedSearch from "./components/nav/script/expanded-search.js";

class Index {
    constructor() {
        this.loadNavBar('nav-bar', 'nav')
        this.loadControllerForCurrentPage();
    }


    authVerify(pageName) {
        const isLoggin = true;
        console.log(pageName !== 'categories' && pageName !== 'home' && isLoggin === false  )
        if (pageName !== 'categories' && pageName !== 'home' && isLoggin === false) {
            window.location.href = '/frontend/src/views/home/html/home.html';
            return false;
        }
        return true;
    }

    async loadControllerForCurrentPage() {
        // Pegue o nome do controlador do atributo data-controller no elemento body
        let controllerName = document.body.dataset.controller;

        if(controllerName){
            const check = this.authVerify(controllerName);
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
