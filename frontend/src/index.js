import $ from 'jquery';
import toggleDropdown from "./components/nav/script/dropdown.js";

class Index {
    constructor() {
        this.loadControllerForCurrentPage();
        this.loadNavBar('nav-bar', 'nav')
    }

    async loadControllerForCurrentPage () {
        // Determina o nome da página baseado na URL
        let pageName = window.location.pathname.split('/').pop();
        // Remove a extensão .html se houver
        pageName = pageName.split('.').shift();
    
        console.log('name url: ' + pageName);
    
        // Carrega o controlador correspondente
        await this.loadController(pageName);
    }
    
    async loadController(pageName) {
        // Nota: Estamos retornando a promessa aqui
        try {
            const module = await import(`./views/${pageName}/script/${pageName}_controller.js`);
            // Cria uma nova instância do controlador
            this[`${pageName}Controller`] = new module[`${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Controller`]();
            return this[`${pageName}Controller`];
        } catch (err) {
            console.error(`Erro ao carregar o controlador ${pageName}: `, err);
        }
    }
    

    loadNavBar(componentName, pathName) {
        var componentsPath = "../../../components";

        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = componentsPath + "/" + pathName + "/style/" + componentName + ".css";
        document.head.appendChild(link);
        console.log(componentsPath + "/" + pathName + "/html/" + componentName + ".html")
        $("#" + componentName).load(componentsPath + "/" + pathName + "/html/" + componentName + ".html", () => {
            const dropdownLinks = document.querySelectorAll(".dropdown-link");
            console.log(dropdownLinks);
            if (dropdownLinks.length > 0) {
                dropdownLinks.forEach(link => {
                    link.addEventListener("click", function (event) {
                        event.preventDefault(); // Evita que o link redWirecione
                        console.log(dropdownLinks);
                        toggleDropdown();
                    });
                });
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new Index();
});
