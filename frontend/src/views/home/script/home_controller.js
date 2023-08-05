export class HomeController {
    loadComponent(componentName, pathName, callback) {
        // Defina a pasta onde estão os componentes
        var componentsPath = "../../../../src/components";

        // Carrega o arquivo de estilo do componente de forma assíncrona usando a tag <link>
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = componentsPath + "/" + pathName + "/style/" + componentName + ".css";
        document.head.appendChild(link);

        $("#" + componentName).load(componentsPath + "/" + pathName + "/html/" + componentName + ".html", callback);
    }

    init(callback) {
        console.log('tesetere');    
    }
}
