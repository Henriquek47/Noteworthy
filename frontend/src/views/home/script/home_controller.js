import { createPost } from "../../../components/recommendation/script/data_post";
import API from "../../../service/data/data";

export class HomeController {
    constructor() {
        this.apiPosts = new API("http://localhost/post/list");
        this.apiDetails = new API("http://localhost/post");
    }

    
    async loadComponent(componentName, pathName) {
        const componentsPath = "../../../components";

        this.loadStylesheet(componentsPath, pathName, componentName);
        await this.loadHTML(componentsPath, pathName, componentName);
    }

    loadStylesheet(componentsPath, pathName, componentName) {
        console.log(`${componentsPath}/${pathName}/style/${componentName}.css`);
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `${componentsPath}/${pathName}/style/${componentName}.css`;
        document.head.appendChild(link);
    }

    async loadHTML(componentsPath, pathName, componentName) {
        console.log(`${componentsPath}/${pathName}/html/${componentName}.html`);
        try {
            const response = await fetch(`${componentsPath}/${pathName}/html/${componentName}.html`);
            if (response.status !== 200) {
                throw new Error(`${response.status}: ${response.statusText}`);
            }
            const html = await response.text();
            document.getElementById(componentName).innerHTML = html;
        } catch (err) {
            console.error(`Erro ao carregar HTML do componente ${componentName}: , err`);
        }
    }

    centerCard() {
        const cards = document.querySelectorAll('.card');
        const wrapper = document.querySelector('.wrapper');
        let closestCardIndex = 0;
        let closestDistance = Infinity;
    
        Array.from(cards).forEach((card, index) => {
            let distanceToCenter = Math.abs((card.offsetLeft + (card.offsetWidth / 2) + parseInt(window.getComputedStyle(card).marginLeft) - document.querySelector('.carousel').scrollLeft) - wrapper.offsetWidth / 2);
            if (distanceToCenter < closestDistance) {
                closestCardIndex = index;
                closestDistance = distanceToCenter;
            }
        });
    
        cards.forEach(card => {
            card.classList.remove("card-center");
            card.classList.remove("first-card");
            card.querySelector('.informations button').classList.add('buttom-margin');
        });
    
        const cardToCenter = cards[closestCardIndex];
        cardToCenter.classList.add("card-center");
        cardToCenter.querySelector('.informations button').classList.remove('buttom-margin');
    
        const centerPosition = cardToCenter.offsetLeft - (wrapper.offsetWidth - cardToCenter.offsetWidth) / 2 - parseInt(window.getComputedStyle(cardToCenter).marginLeft);
    
        document.querySelector('.carousel').scrollTo({
            left: centerPosition,
            behavior: 'smooth'
        });
    }

    moveCarousel() {
        let isDragStart = false, prevPageX, prevScrollLeft;
        const carousel = document.querySelector('.carousel');

        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX;
            prevScrollLeft = carousel.scrollLeft;
        }

        const dragStop = () => {
            isDragStart = false;
            this.centerCard();
        }

        const dragging = (e) => {
            if (!isDragStart) return;
            let positionDiff = e.pageX - prevPageX;
            e.preventDefault();
            carousel.scrollLeft = prevScrollLeft - positionDiff;
        }

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mouseup", dragStop);
        carousel.addEventListener("mousemove", dragging);
        carousel.addEventListener("mouseleave", dragStop);
    }

    async loadPosts(){
        const posts = await this.apiPosts.getData();
        posts.forEach(async post => {
            createPost(post);
        });
    }    

    init() {
        this.moveCarousel();
        this.centerCard();
        this.loadComponent("recommendations", "recommendation");
        this.loadPosts();
    }
}
