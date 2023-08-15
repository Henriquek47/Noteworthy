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

    createOrderDetails(orderDetails) {
        const template = document.createElement('template');
        template.innerHTML = `<div class="order">
        <img src="${orderDetails.pictures[0]}" alt="Guitarra">
        <p class="order-desc">Fender Stratocaster</p>
        <p>R$ ${orderDetails.price}</p>
    </div>
    </div>
    <div class="summary">
    <h2>Resumo</h2>
    <div class="itens">
        <p>Itens:</p>
        <p>1</p>
    </div>
    <div class="price">
        <p>Preço:</p>
        <p>R$ ${orderDetails.price}</p>
    </div>
    <div class="total">
        <p>Total:</p>
        <p>R$ ${orderDetails.price}</p>
    </div>
    </div>`
    
        return template.content.firstChild;
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
        //const orderContainer = document.getElementById('order-details-container');
        //orderContainer.appendChild(this.createOrderDetails(Post()));
    }
}
