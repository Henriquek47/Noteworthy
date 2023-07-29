import { HomeController } from "./views/home/script/home_controller.js";

class Index{
    constructor() {
        this.home = new HomeController();
    }

    loadComponent(componentName, pathName) {
        // Defina a pasta onde estão os componentes
        var componentsPath = "../../../../src/components";
      
        // Carrega o HTML do componente e adiciona ao elemento com o ID fornecido
        $("#" + componentName).load(componentsPath + "/" + pathName + "/html/" + componentName + ".html");
      }
      

    initSistem(){
        this.loadComponent('nav-bar', 'nav');
        this.home.init();
    }
}
const index = new Index();
index.initSistem();