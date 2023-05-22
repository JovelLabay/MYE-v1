var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var btnIcon = this.querySelector(".btnIcon");
    var icon = this.querySelector(".btnIcon i");

    if (panel.style.display === "block") {
      panel.style.display = "none";
      btnIcon.classList.remove("active");

      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      panel.style.display = "block";
      btnIcon.classList.add("active");

      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");

      panel.style.borderBottom = "1px solid #B8C6D0";
    }
  });

  var panel = acc[i].nextElementSibling;
  panel.style.display = "none";
}

const pop1 = document.querySelector("#pop-1");
const pop1Content = document.querySelector("#pop1-content");

const pop2 = document.querySelector("#pop-2");
const pop2Content = document.querySelector("#pop2-content");

const pop3 = document.querySelector("#pop-3");
const pop3Content = document.querySelector("#pop3-content");

pop1.addEventListener("mouseenter", () => {
  pop1Content.classList.add("popup-content1-show");
  document.querySelector("#dot-1-line").style.display = "block";
  document.querySelector("#dot-1-round").style.display = "block";
});
pop1.addEventListener("mouseout", () => {
  pop1Content.classList.remove("popup-content1-show");
  document.querySelector("#dot-1-line").style.display = "none";
  document.querySelector("#dot-1-round").style.display = "none";
});

pop2.addEventListener("mouseenter", () => {
  pop1Content.classList.add("popup-content2-show");
  document.querySelector("#dot-2-line").style.display = "block";
  document.querySelector("#dot-2-round").style.display = "block";
});
pop2.addEventListener("mouseout", () => {
  pop1Content.classList.remove("popup-content2-show");
  document.querySelector("#dot-2-line").style.display = "none";
  document.querySelector("#dot-2-round").style.display = "none";
});

pop3.addEventListener("mouseenter", () => {
  pop3Content.classList.add("popup-content3-show");
  document.querySelector("#dot-3-line").style.display = "block";
  document.querySelector("#dot-3-round").style.display = "block";
});
pop3.addEventListener("mouseout", () => {
  pop3Content.classList.remove("popup-content3-show");
  document.querySelector("#dot-3-line").style.display = "none";
  document.querySelector("#dot-3-round").style.display = "none";
});

const circle = document.querySelector(".circle");
const bgImage = document.querySelector(".bg-image");

let scrollCount = 0;
let isImageVisible = false;

const handleScroll = function () {
  scrollCount++;

  if (scrollCount >= 2 && !isImageVisible) {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const circleSize = 50 + (scrollTop / windowHeight) * 2000;

    circle.style.width = `${circleSize}px`;
    circle.style.height = `${circleSize}px`;

    const imageRect = bgImage.getBoundingClientRect();
    const imageTop = imageRect.top;
    const imageHeight = imageRect.height;
    const imageBottom = imageTop + imageHeight;

    if (imageTop >= 0 && imageBottom <= windowHeight) {
      isImageVisible = true;
      window.removeEventListener("scroll", handleScroll);
    }
  }
};

window.addEventListener("scroll", handleScroll);

const scrollUp = document.querySelector(".scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("hide");
    } else {
      entry.target.classList.add("hide");
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".animate");
hiddenElements.forEach((el) => observer.observe(el));
