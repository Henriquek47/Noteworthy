import toggleDropdown from "./components/nav/script/dropdown.js";

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
        // Determina o nome da página baseado na URL
        let pageName = window.location.pathname.split('/').pop();
        // Remove a extensão .html se houver
        pageName = pageName.split('.').shift();

        const check = this.authVerify(pageName);
        if(check){
            await this.loadController(pageName);
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
                    console.log(dropdownLinks);
                    toggleDropdown();
                });
            });
        }
    }

}

document.addEventListener("DOMContentLoaded", () => {
    new Index();
});
