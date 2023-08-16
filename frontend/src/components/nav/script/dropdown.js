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

export async function logout(callApi){
  const login = document.querySelector(".login a");
  login.addEventListener("click", async function (event) {
    if(login.textContent === 'Sair'){
      await callApi.postData();
      login.textContent = 'Login';
      login.href = 'http://127.0.0.1:5501/frontend/src/views/home/html/index.html'
    }
  })
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
