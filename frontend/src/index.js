import { HomeController } from "./views/home/script/home_controller.js";

class Index {
    constructor() {
        this.home = new HomeController();
    }

    initSistem() {
        this.home.init();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const index = new Index();
    index.initSistem();
});