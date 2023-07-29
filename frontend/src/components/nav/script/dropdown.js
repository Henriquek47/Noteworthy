export default function toggleDropdown() {
  var dropdownContent = document.getElementById("categorias-dropdown");

  if(dropdownContent.classList.contains("show")) {
    dropdownContent.classList.remove("show");
  } else {
    dropdownContent.classList.add("show");
    console.log('tejadj')
  }


}
