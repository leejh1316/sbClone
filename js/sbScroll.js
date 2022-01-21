//bean영역 스크롤
const beanMainArea = document.querySelector(".beanMainArea");
const beanImgDiv = document.querySelector(".beanImgDiv");
const beanContent = document.querySelector(".beanContent");
let beanLeftCnt = -75;
let beanRightCnt = -60;
let beanImgOp = 0;
let beanConOp = 0;
let beanEventCheck = false;
let leftTime;
let rightTime;

//reserve영역 스크롤
const scBackGround = document.querySelector(".scBackGround");
const reserveArea = document.querySelector(".reserveCon");
console.log(reserveArea.getBoundingClientRect());

//winter영역
const winterWrapCon = document.querySelector(".winterWrapCon");
const winterTextImg01 = document.querySelector(".winterTextImg01");
const winterTextImg02 = document.querySelector(".winterTextImg02");
const winterExtent = document.querySelector(".winterExtent");
let winterLeftCnt01 = -60;
let winterLeftCnt02 = -50;
let winterImgOp01 = 0;
let winterImgOp02 = 0;
let winterEventCheck = false;
let wLeftTime01;
let wLeftTime02;

//magazine
const magazineCon = document.querySelector(".magazineCon");
const mamazineImgs = document.querySelector(".mamazineImgs");

//store
const storeCon = document.querySelector(".storeCon");
const storeImg01 = document.querySelector(".storeImg01");
const storeImg02 = document.querySelector(".storeImg02");
const storeTextImg01 = document.querySelector(".storeTextImg01");
const storeTextImg02 = document.querySelector(".storeTextImg02");
const storeExtent = document.querySelector(".storeExtent");
let storeTextOp01 = 0;
let storeTextOp02 = 0;
let storeTextOp03 = 0;
let storeTextRight01 = -500;
let storeTextRight02 = -600;
let storeTextRight03 = -700;
let storeEventCheck = false;
let storeTime01;
let storeTime02;
let storeTime03;

//scroll 이벤트 모음
const scrollEvent = {
  bean: function () {
    if (window.scrollY > beanMainArea.getBoundingClientRect().top - 350) {
      // beanImgDiv.classList.add("beanImgStartInAnime");
      // beanContent.classList.add("beanContentStartInAnime");
      if (beanEventCheck == false) {
        beanEventCheck = true;
        clearInterval(leftTime);
        clearInterval(rightTime);
        leftTime = setInterval(function () {
          if (beanLeftCnt > 14) {
            clearInterval(leftTime);
          } else {
            beanLeftCnt = beanLeftCnt + 0.25;
            beanImgOp = beanImgOp + 0.23;
            beanImgDiv.style.left = beanLeftCnt + "%";
            beanImgDiv.style.opacity = beanConOp + "%";
          }
        }, 2);
        rightTime = setInterval(function () {
          if (beanRightCnt > 9) {
            clearInterval(rightTime);
          } else {
            beanRightCnt = beanRightCnt + 0.17;
            beanConOp = beanConOp + 0.23;
            beanContent.style.right = beanRightCnt + "%";
            beanContent.style.opacity = beanConOp + "%";
          }
        }, 2);
      }
    } else if (window.scrollY === 0) {
      // beanImgDiv.classList.remove("beanImgStartInAnime");
      // beanContent.classList.remove("beanContentStartInAnime");
      // beanImgDiv.classList.add("beanImgStartOutAnime");
      // beanContent.classList.add("beanContentStartOutAnime");
      if (beanEventCheck == true) {
        beanEventCheck = false;
        clearInterval(leftTime);
        clearInterval(rightTime);
        leftTime = setInterval(function () {
          if (beanLeftCnt < -70) {
            clearInterval(leftTime);
          } else {
            beanLeftCnt = beanLeftCnt - 0.2;
            beanImgOp = beanImgOp - 0.16;
            beanImgDiv.style.left = beanLeftCnt + "%";
            beanImgDiv.style.opacity = beanConOp + "%";
          }
        }, 2);
        rightTime = setInterval(function () {
          if (beanRightCnt < -50) {
            clearInterval(rightTime);
          } else {
            beanRightCnt = beanRightCnt - 0.2;
            beanConOp = beanConOp - 0.16;
            beanContent.style.right = beanRightCnt + "%";
            beanContent.style.opacity = beanConOp + "%";
          }
        }, 2);
      }
    } else {
      // beanImgDiv.classList.remove("beanImgStartOutAnime");
      // beanContent.classList.remove("beanContentStartOutAnime");
    }
  },
  reserve: function () {
    if (window.scrollY > reserveArea.getBoundingClientRect().top - 450) {
      scBackGround.classList.add("reserveFadeStart");
      // console.log("dawd");
    }
  },
  winter: function () {
    if (window.scrollY > winterWrapCon.getBoundingClientRect().top + 540) {
      winterExtent.classList.remove("winterFadeOut");
      winterExtent.classList.add("winterFadeIn");
      if (winterEventCheck == false) {
        winterEventCheck = true;
        clearInterval(wLeftTime01);
        clearInterval(wLeftTime02);
        wLeftTime01 = setInterval(function () {
          if (winterLeftCnt01 > 16) {
            clearInterval(wLeftTime01);
          } else {
            winterLeftCnt01 = winterLeftCnt01 + 0.17;
            winterImgOp01 = winterImgOp01 + 0.27;
            winterTextImg01.style.left = winterLeftCnt01 + "%";
            winterTextImg01.style.opacity = winterImgOp01 + "%";
          }
        }, 2);
        wLeftTime02 = setInterval(function () {
          if (winterLeftCnt02 > 7) {
            clearInterval(wLeftTime02);
          } else {
            winterLeftCnt02 = winterLeftCnt02 + 0.13;
            winterImgOp02 = winterImgOp02 + 0.27;
            winterTextImg02.style.left = winterLeftCnt02 + "%";
            winterTextImg02.style.opacity = winterImgOp02 + "%";
          }
        }, 2);
      }
    } else {
      winterExtent.classList.remove("winterFadeIn");
      winterExtent.classList.add("winterFadeOut");
      if (winterEventCheck == true) {
        winterEventCheck = false;
        clearInterval(wLeftTime01);
        clearInterval(wLeftTime02);
        wLeftTime01 = setInterval(function () {
          if (winterLeftCnt01 < -60) {
            clearInterval(wLeftTime01);
          } else {
            winterLeftCnt01 = winterLeftCnt01 - 0.17;
            winterImgOp01 = winterImgOp01 - 0.27;
            winterTextImg01.style.left = winterLeftCnt01 + "%";
            winterTextImg01.style.opacity = winterImgOp01 + "%";
          }
        }, 2);
        wLeftTime02 = setInterval(function () {
          if (winterLeftCnt02 < -50) {
            clearInterval(wLeftTime02);
          } else {
            winterLeftCnt02 = winterLeftCnt02 - 0.13;
            winterImgOp02 = winterImgOp02 - 0.27;
            winterTextImg02.style.left = winterLeftCnt02 + "%";
            winterTextImg02.style.opacity = winterImgOp02 + "%";
          }
        }, 2);
      }
    }
  },
  magazine: function () {
    if (window.scrollY > magazineCon.getBoundingClientRect().top + 700) {
      mamazineImgs.classList.remove("magazineFadeOut");
      mamazineImgs.classList.add("magazineFadeIn");
    } else {
      mamazineImgs.classList.remove("magazineFadeIn");
      mamazineImgs.classList.add("magazineFadeOut");
    }
  },
  store: function () {
    if (window.scrollY > storeCon.getBoundingClientRect().top + 1700) {
      storeImg01.classList.remove("storeFadeOut");
      storeImg02.classList.remove("storeFadeOut");
      storeImg01.classList.add("storeFadeIn");
      storeImg02.classList.add("storeFadeIn");
      if (storeEventCheck === false) {
        clearInterval(storeTime01);
        clearInterval(storeTime02);
        clearInterval(storeTime03);
        storeEventCheck = true;
        storeTime01 = setInterval(function () {
          if (storeTextRight01 > 149) {
            clearInterval(storeTime01);
          } else if (storeTextRight01 > 100) {
            storeTextRight01 = storeTextRight01 + 0.4;
            storeTextOp01 = storeTextOp01 + 0.25;
            storeTextImg01.style.right = storeTextRight01 + "px";
            storeTextImg01.style.opacity = storeTextOp01 + "%";
          } else if (storeTextRight01 > 50) {
            storeTextRight01 = storeTextRight01 + 1.5;
            storeTextOp01 = storeTextOp01 + 0.25;
            storeTextImg01.style.right = storeTextRight01 + "px";
            storeTextImg01.style.opacity = storeTextOp01 + "%";
          } else if (storeTextRight01 > -110) {
            storeTextRight01 = storeTextRight01 + 1.7;
            storeTextOp01 = storeTextOp01 + 0.25;
            storeTextImg01.style.right = storeTextRight01 + "px";
            storeTextImg01.style.opacity = storeTextOp01 + "%";
          } else if (storeTextRight01 > -340) {
            storeTextRight01 = storeTextRight01 + 1.9;
            storeTextOp01 = storeTextOp01 + 0.25;

            storeTextImg01.style.right = storeTextRight01 + "px";
            storeTextImg01.style.opacity = storeTextOp01 + "%";
          } else {
            storeTextRight01 = storeTextRight01 + 2.2;
            storeTextOp01 = storeTextOp01 + 0.25;

            storeTextImg01.style.right = storeTextRight01 + "px";
            storeTextImg01.style.opacity = storeTextOp01 + "%";
          }
        }, 2);
        storeTime02 = setInterval(function () {
          if (storeTextRight02 > 168) {
            clearInterval(storeTime02);
          } else if (storeTextRight02 > 120) {
            storeTextRight02 = storeTextRight02 + 0.6;
            storeTextOp02 = storeTextOp02 + 0.25;
            storeTextImg02.style.right = storeTextRight02 + "px";
            storeTextImg02.style.opacity = storeTextOp02 + "%";
          } else if (storeTextRight02 > 0) {
            storeTextRight02 = storeTextRight02 + 1.4;
            storeTextOp02 = storeTextOp02 + 0.25;
            storeTextImg02.style.right = storeTextRight02 + "px";
            storeTextImg02.style.opacity = storeTextOp02 + "%";
          } else if (storeTextRight02 > -150) {
            storeTextRight02 = storeTextRight02 + 1.6;
            storeTextOp02 = storeTextOp02 + 0.25;
            storeTextImg02.style.right = storeTextRight02 + "px";
            storeTextImg02.style.opacity = storeTextOp02 + "%";
          } else if (storeTextRight02 > -300) {
            storeTextRight02 = storeTextRight02 + 1.8;
            storeTextOp02 = storeTextOp02 + 0.25;
            storeTextImg02.style.right = storeTextRight02 + "px";
            storeTextImg02.style.opacity = storeTextOp02 + "%";
          } else if (storeTextRight02 > -450) {
            storeTextRight02 = storeTextRight02 + 2;
            storeTextOp02 = storeTextOp02 + 0.25;
            storeTextImg02.style.right = storeTextRight02 + "px";
            storeTextImg02.style.opacity = storeTextOp02 + "%";
          } else {
            storeTextRight02 = storeTextRight02 + 2.2;
            storeTextOp02 = storeTextOp02 + 0.25;
            storeTextImg02.style.right = storeTextRight02 + "px";
            storeTextImg02.style.opacity = storeTextOp02 + "%";
          }
        }, 2);
        storeTime03 = setInterval(function () {
          if (storeTextRight03 > 402) {
            clearInterval(storeTime03);
          } else if (storeTextRight03 > 350) {
            storeTextRight03 = storeTextRight03 + 0.5;
            storeTextOp03 = storeTextOp03 + 0.4;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          } else if (storeTextRight03 > 300) {
            storeTextRight03 = storeTextRight03 + 1.5;
            storeTextOp03 = storeTextOp03 + 0.4;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          } else if (storeTextRight03 > 100) {
            storeTextRight03 = storeTextRight03 + 1.7;
            storeTextOp03 = storeTextOp03 + 0.4;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          } else if (storeTextRight03 > -100) {
            storeTextRight03 = storeTextRight03 + 2.0;
            storeTextOp03 = storeTextOp03 + 0.4;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          } else if (storeTextRight03 > -300) {
            storeTextRight03 = storeTextRight03 + 2.4;
            storeTextOp03 = storeTextOp03 + 0.4;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          } else if (storeTextRight03 > -500) {
            storeTextRight03 = storeTextRight03 + 2.7;
            storeTextOp03 = storeTextOp03 + 0.4;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          } else {
            storeTextRight03 = storeTextRight03 + 2.9;
            storeTextOp03 = storeTextOp03 + 0.4;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          }
        }, 2);
      }
    } else {
      storeImg01.classList.remove("storeFadeIn");
      storeImg02.classList.remove("storeFadeIn");
      storeImg01.classList.add("storeFadeOut");
      storeImg02.classList.add("storeFadeOut");

      if (storeEventCheck === true) {
        clearInterval(storeTime01);
        clearInterval(storeTime02);
        clearInterval(storeTime03);
        storeEventCheck = false;
        storeTime01 = setInterval(function () {
          if (storeTextRight01 < -500) {
            clearInterval(storeTime01);
          } else if (storeTextRight01 > 100) {
            storeTextRight01 = storeTextRight01 - 1.3;
            storeTextOp01 = storeTextOp01 - 0.4;
            storeTextImg01.style.right = storeTextRight01 + "px";
            storeTextImg01.style.opacity = storeTextOp01 + "%";
          } else if (storeTextRight01 > 50) {
            storeTextRight01 = storeTextRight01 - 1.5;
            storeTextOp01 = storeTextOp01 - 0.4;
            storeTextImg01.style.right = storeTextRight01 + "px";
            storeTextImg01.style.opacity = storeTextOp01 + "%";
          } else if (storeTextRight01 > -110) {
            storeTextRight01 = storeTextRight01 - 1.7;
            storeTextOp01 = storeTextOp01 - 0.4;
            storeTextImg01.style.right = storeTextRight01 + "px";
            storeTextImg01.style.opacity = storeTextOp01 + "%";
          } else if (storeTextRight01 > -340) {
            storeTextRight01 = storeTextRight01 - 1.9;
            storeTextOp01 = storeTextOp01 - 0.4;
            storeTextImg01.style.right = storeTextRight01 + "px";
            storeTextImg01.style.opacity = storeTextOp01 + "%";
          } else {
            storeTextRight01 = storeTextRight01 - 2.2;
            storeTextOp01 = storeTextOp01 - 0.4;

            storeTextImg01.style.right = storeTextRight01 + "px";
            storeTextImg01.style.opacity = storeTextOp01 + "%";
          }
        }, 2);
        storeTime02 = setInterval(function () {
          if (storeTextRight02 < -600) {
            clearInterval(storeTime02);
          } else if (storeTextRight02 > 120) {
            storeTextRight02 = storeTextRight02 - 1.4;
            storeTextOp02 = storeTextOp02 - 0.25;
            storeTextImg02.style.right = storeTextRight02 + "px";
            storeTextImg02.style.opacity = storeTextOp02 + "%";
          } else if (storeTextRight02 > 0) {
            storeTextRight02 = storeTextRight02 - 1.4;
            storeTextOp02 = storeTextOp02 - 0.25;
            storeTextImg02.style.right = storeTextRight02 + "px";
            storeTextImg02.style.opacity = storeTextOp02 + "%";
          } else if (storeTextRight02 > -150) {
            storeTextRight02 = storeTextRight02 - 1.6;
            storeTextOp02 = storeTextOp02 - 0.25;
            storeTextImg02.style.right = storeTextRight02 + "px";
            storeTextImg02.style.opacity = storeTextOp02 + "%";
          } else if (storeTextRight02 > -300) {
            storeTextRight02 = storeTextRight02 - 1.8;
            storeTextOp02 = storeTextOp02 - 0.25;
            storeTextImg02.style.right = storeTextRight02 + "px";
            storeTextImg02.style.opacity = storeTextOp02 + "%";
          } else if (storeTextRight02 > -450) {
            storeTextRight02 = storeTextRight02 - 2;
            storeTextOp02 = storeTextOp02 - 0.25;
            storeTextImg02.style.right = storeTextRight02 + "px";
            storeTextImg02.style.opacity = storeTextOp02 + "%";
          } else {
            storeTextRight02 = storeTextRight02 - 2.2;
            storeTextOp02 = storeTextOp02 - 0.25;
            storeTextImg02.style.right = storeTextRight02 + "px";
            storeTextImg02.style.opacity = storeTextOp02 + "%";
          }
        }, 2);
        storeTime03 = setInterval(function () {
          if (storeTextRight03 < -700) {
            clearInterval(storeTime03);
          } else if (storeTextRight03 < 350) {
            storeTextRight03 = storeTextRight03 - 1.2;
            storeTextOp03 = storeTextOp03 - 0.25;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          } else if (storeTextRight03 < 300) {
            storeTextRight03 = storeTextRight03 - 1.5;
            storeTextOp03 = storeTextOp03 - 0.25;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          } else if (storeTextRight03 < 100) {
            storeTextRight03 = storeTextRight03 - 1.7;
            storeTextOp03 = storeTextOp03 - 0.25;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          } else if (storeTextRight03 < -100) {
            storeTextRight03 = storeTextRight03 - 2.0;
            storeTextOp03 = storeTextOp03 - 0.25;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          } else if (storeTextRight03 < -300) {
            storeTextRight03 = storeTextRight03 - 2.4;
            storeTextOp03 = storeTextOp03 - 0.25;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          } else if (storeTextRight03 < -500) {
            storeTextRight03 = storeTextRight03 - 2.7;
            storeTextOp03 = storeTextOp03 - 0.25;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          } else {
            storeTextRight03 = storeTextRight03 - 2.9;
            storeTextOp03 = storeTextOp03 - 0.25;
            storeExtent.style.right = storeTextRight03 + "px";
            storeExtent.style.opacity = storeTextOp03 + "%";
          }
        }, 2);
      }
    }
  },
};
//이벤트 연결
window.addEventListener("scroll", scrollEvent.bean);
window.addEventListener("scroll", scrollEvent.reserve);
window.addEventListener("scroll", scrollEvent.winter);
window.addEventListener("scroll", scrollEvent.magazine);
window.addEventListener("scroll", scrollEvent.store);
