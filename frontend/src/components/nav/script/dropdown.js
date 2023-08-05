export default function toggleDropdown() {
  const dropdownLinks = document.querySelectorAll(".dropdown-link");
  if (dropdownLinks.length > 0) {
    dropdownLinks.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que o link redirecione
        var dropdownContent = document.getElementById("categorias-dropdown");

        if (dropdownContent.classList.contains("show")) {
          dropdownContent.classList.remove("show");
        } else {
          dropdownContent.classList.add("show");
        }
      });
    });
  }
}

export function toggleDropdownMenu() {
  const dropdownMenu = document.querySelectorAll(".menu");
  const icon = document.querySelector(".search-box img");
  const searchBox = document.querySelector(".search-box input");
  if (dropdownMenu.length > 0) {
    dropdownMenu.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que o link redirecione
        var dropdownContent = document.getElementById("menu-list");

        if (dropdownContent.classList.contains("show")) {
          dropdownContent.classList.remove("show");
        } else {
            if (!searchBox.classList.contains("expanded")) {
              dropdownContent.classList.add("show");
            }
        }
        icon.addEventListener('click', function (event) {
          dropdownContent.classList.remove("show");
          event.stopPropagation(); // Previne a propagação do evento
        });
      });
    });
  }
}
