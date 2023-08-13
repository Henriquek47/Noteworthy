import Address from "../../../models/address-model";
import Payment from "../../../models/payment-model";
import API from "../../../service/data/data";

export class PaymentController {
    constructor() {
        this.apiPayment = new API("http://localhost/payment");
    }

    async sendAddressDetails() {
        document.getElementById('address-form').addEventListener('submit', async function (event) {
            // Evita que o formulário seja enviado e a página seja recarregada
            event.preventDefault();
            const cityElement = document.getElementById('city').value;
            const neighborhoodElement = document.getElementById('neighborhood').value;
            const streetElement = document.getElementById('street').value;
            const numberElement = document.getElementById('number').value;
            const cepElement = document.getElementById('cep').value;
            const complementElement = document.getElementById('complement').value;

            const address = new Address(
                cityElement,
                neighborhoodElement,
                streetElement,
                numberElement,
                cepElement,
                complementElement
            );

            return address;
        });
    }

    loadComponent(componentName, pathName) {
        // Defina a pasta onde estão os componentes
        var componentsPath = "../../../../src/components";

        // Carrega o arquivo de estilo do componente de forma assíncrona usando a tag <link>
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = componentsPath + "/" + pathName + "/style/" + componentName + ".css";
        document.head.appendChild(link);

        $("#" + componentName).load(componentsPath + "/" + pathName + "/html/" + componentName + ".html");
    }

    init() {
        this.sendAddressDetails();
    }
}
