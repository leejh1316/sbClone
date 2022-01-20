const beanMainArea = document.querySelector(".beanMainArea");
const beanImgDiv = document.querySelector(".beanImgDiv");
const beanContent = document.querySelector(".beanContent");
const startAnimation = function () {
  if (window.scrollY > beanMainArea.getBoundingClientRect().top - 550) {
    beanImgDiv.classList.add("beanImgStartAnime");
    beanContent.classList.add("beanContentStartAnime");
  }
};
window.addEventListener("scroll", startAnimation);
