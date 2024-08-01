const NavSideBar = document.querySelector(".NavSideBar");
const NavMenu = document.querySelector(".NavMenu");

NavSideBar.addEventListener("click", () => {
    NavSideBar.classList.toggle("active")
    NavMenu.classList.toggle("active")
})