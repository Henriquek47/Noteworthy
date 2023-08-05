import toggleDropdown, { toggleDropdownMenu } from "./components/nav/script/dropdown.js";

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
        var componentsPath = "../../../components";

        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = componentsPath + "/" + pathName + "/style/" + componentName + ".css";
        document.head.appendChild(link);

        await new Promise((resolve, reject) => {
            $("#" + componentName).load(componentsPath + "/" + pathName + "/html/" + componentName + ".html", (response, status, xhr) => {
                if (status == "error") {
                    reject(xhr.status + ": " + xhr.statusText);
                } else {
                    resolve(response);
                }
            });
        });

        const dropdownLinks = document.querySelectorAll(".dropdown-link");
        if (dropdownLinks.length > 0) {
            dropdownLinks.forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault(); // Evita que o link redirecione
                    toggleDropdown();
                });
            });
        }
        const dropdownMenu = document.querySelectorAll(".menu");
        if (dropdownMenu.length > 0) {
            dropdownMenu.forEach(link => {
                link.addEventListener("click", function (event) {
                    event.preventDefault(); // Evita que o link redirecione
                    toggleDropdownMenu();
                });
            });
        }
    }

}

document.addEventListener("DOMContentLoaded", () => {
    new Index();
});
