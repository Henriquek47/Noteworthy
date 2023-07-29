import toggleDropdown from "./components/nav/script/dropdown.js";
import { HomeController } from "./views/home/script/home_controller.js";

class Index {
    constructor() {
        this.home = new HomeController();
    }

    initSistem() {
        this.home.init(() => {
            const dropdownLinks = document.querySelectorAll(".dropdown-link");
            console.log(dropdownLinks);
            if (dropdownLinks.length > 0) {
                dropdownLinks.forEach(link => {
                    link.addEventListener("click", function (event) {
                        event.preventDefault(); // Evita que o link redirecione
                        console.log(dropdownLinks);
                        toggleDropdown();
                    });
                });
            }
        });
    }

}

document.addEventListener("DOMContentLoaded", () => {
    const index = new Index();
    index.initSistem();
});
