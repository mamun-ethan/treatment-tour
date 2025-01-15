document.getElementById("menu-btn").addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

function toggleSubmenu(id) {
  const submenu = document.getElementById(id);
  submenu.classList.toggle("hidden");
}

// Optionally, to close a previously opened submenu when clicking another item
document.addEventListener("click", function (event) {
  const target = event.target;
  const submenu = document.querySelectorAll(".hidden");

  submenu.forEach((item) => {
    if (
      !target.closest("#" + item.id) &&
      item.classList.contains("hidden") === false
    ) {
      item.classList.add("hidden");
    }
  });
});
