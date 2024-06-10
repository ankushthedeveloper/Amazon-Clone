// ₹

const nextBtn = document.querySelector(".control_next");
const prevBtn = document.querySelector(".control_prev");

const imgs = document.querySelectorAll(".header-slider ul img ");

let n = 0;

const changeSlide = () => {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
};

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (n >= 0 && n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

prevBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (n <= imgs.length - 1 && n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

const scrollContainer = document.querySelectorAll(".products");
console.log(scrollContainer);

for (const item of scrollContainer) {
  item.addEventListener("wheel", (e) => {
    e.preventDefault();
    item.scrollLeft+= e.deltaY;
  });
}
