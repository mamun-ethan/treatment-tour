const button = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

var glide01 = new Glide(".glide-01", {
  type: "carousel",
  focusAt: "center",
  perView: 4,
  autoplay: 2000,
  animationDuration: 700,
  gap: 10,
  classes: {
    activeNav: "[&>*]:bg-slate-700",
  },
  breakpoints: {
    1024: {
      perView: 2,
    },
    640: {
      perView: 1,
    },
  },
});

glide01.mount();
