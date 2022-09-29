function toggleNav() {
  let menuList = document.getElementById("menuList");
  menuList.classList.toggle("menulist--active");
}

let img = document.getElementById("menuToggle");
img.addEventListener("click", toggleNav);
