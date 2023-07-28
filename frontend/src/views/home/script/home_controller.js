module.exports = class HomeController{

    loadComponent(componentName) {
        // Defina a pasta onde estão os componentes
        var componentsPath = "../../../components/";
        
        // Carrega o HTML do componente e adiciona ao elemento com o ID fornecido
        $("#" + componentName).load(componentsPath + componentName + ".html");
    }

    init(){
        this.loadComponent('nav-bar');
    }
}