export default function expandedSearch() {
    const searchBox = document.querySelectorAll(".search-box");
    if (searchBox.length > 0) {
        searchBox.forEach(link => {
            link.addEventListener("click", function (event) {
                event.preventDefault(); // Evita que o link redirecione
                const searchBox = document.querySelector(".search-box input");
                const icon = document.querySelector(".search-box img");
                const optionsList = document.querySelector(".options-list");

                // Função para expandir ou contrair a caixa de pesquisa
                icon.addEventListener('click', function (event) {

                    if (searchBox.classList.contains("expanded")) {
                        event.stopPropagation();
                        return;
                    }
                    console.log('teste');
                    optionsList.classList.add("hidden");
                    searchBox.classList.add("expanded");
                    event.stopPropagation(); // Previne a propagação do evento
                });


                searchBox.addEventListener('click', function (event) {
                    event.stopPropagation(); // Previne a propagação do evento
                });

                document.addEventListener('click', function () {
                    searchBox.classList.remove("expanded");
                    searchBox.addEventListener('transitionend', function () {
                        if (!searchBox.classList.contains("expanded")) {
                            optionsList.classList.remove("hidden");
                        }
                    }, { once: true }); // O manipulador de eventos será removido automaticamente depois de ser chamado uma vez
                });
            });
        });
    }
}
