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

    moveCarousel() {
        let isDragStart = false, prevPageX, prevScrollLeft;
        const carousel = document.querySelector('.carousel');
        var widthScreen = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX;
            prevScrollLeft = carousel.scrollLeft;
        }

        const dragStop = () => {
            isDragStart = false;
            //centerCard();
        }

        const dragging = (e) => {
            if (isDragStart == false) {
                return;
            }
            let positionDiff = e.pageX - prevPageX;
            e.preventDefault();
            carousel.scrollLeft = prevScrollLeft - positionDiff;
            increaseHeight(e);
        }

        const increaseHeight = (e) => {
            const cards = document.querySelectorAll('.card');
            const wrapper = document.querySelector('.wrapper');
            let lastCard = 0;
            Array.from(cards).forEach((card, index) => {
                let distanceToCenter = (card.offsetLeft + (card.offsetWidth / 2) + parseInt(window.getComputedStyle(card).marginLeft) - carousel.scrollLeft) - widthScreen / 2;
                if (cards[index + 1] != undefined) {
                    lastCard = cards[index + 1].offsetHeight;
                    // fazer algo com height
                  }
                if(index === 0 || index === 1){
                    console.log(distanceToCenter + ' index = ' + index);
                }
                if((distanceToCenter < 300 && distanceToCenter > 0) || (distanceToCenter < 0 && distanceToCenter > -282)){
                    let currentHeight = parseInt(card.style.height || card.offsetHeight);
                    let currentWidth = parseInt(card.style.width  || card.offsetWidth);
                    if(currentHeight < 450){    
                        const newHeight = (currentHeight + 1) + "px";
                        card.style.height = newHeight;

                        const newWidth = (currentWidth + 1) + "px";
                        card.style.width = newWidth;
                    }
                }else{
                    let currentHeight = parseInt(card.style.height || card.offsetHeight);
                    let currentWidth = parseInt(card.style.width  || card.offsetWidth);
                    if(currentHeight > 409){
                        const newHeight = (currentHeight - 1) + "px";
                        card.style.height = newHeight;

                        const newWidth = (currentWidth - 1) + "px";
                        card.style.width = newWidth;
                    }
                }
            });
        }

        //const centerCard = () => {
        //    const cards = document.querySelectorAll('.card');
        //    const wrapper = document.querySelector('.wrapper');
        //    let closestCardIndex = 0;
        //    let closestDistance = Infinity;
//
        //    Array.from(cards).forEach((card, index) => {
        //        let distanceToCenter = Math.abs((card.offsetLeft + (card.offsetWidth / 2) + parseInt(window.getComputedStyle(card).marginLeft) - carousel.scrollLeft) - wrapper.offsetWidth / 2);
        //        console.log(distanceToCenter)
        //        if (distanceToCenter < closestDistance) {
        //            closestCardIndex = index;
        //            closestDistance = distanceToCenter;
        //        }
        //    });
//
        //    const cardToCenter = cards[closestCardIndex];
        //    const centerPosition = cardToCenter.offsetLeft - (wrapper.offsetWidth - cardToCenter.offsetWidth) / 2 - parseInt(window.getComputedStyle(cardToCenter).marginLeft);
        //    carousel.scrollLeft = centerPosition;
        //}

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mouseup", dragStop);
        carousel.addEventListener("mousemove", dragging);
        carousel.addEventListener("mouseleave", dragStop);
    }


    init(callback) {
        this.moveCarousel();
    }
}
