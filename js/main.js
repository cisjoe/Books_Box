let overlay = document.querySelector(".landing-overlay");
let logdiv = document.querySelector(".logo");
let logif = document.querySelector(".logif");
let links = document.querySelectorAll(".links li");
let on = document.querySelector(".switcher span.on");
let off = document.querySelector(".switcher span.off");
let light = document.querySelector(".light");
let darkness = document.querySelector(".darkness");
let switcher = document.querySelector(".switcher");
let home = document.querySelector("li.Home");
let books = document.querySelector("li.Books");
let about = document.querySelector("li.About");
let oSpan = document.querySelector("li.Books span");
let fP = document.querySelector(".qt p:first-child");
let sP = document.querySelector(".qt p:nth-child(2)");
let thP = document.querySelector(".qt p:last-child");
let aboutBackBtn = document.querySelector(".aboutBackBtn");
let booksBackBtn = document.querySelector(".booksBackBtn");
let bookBack = document.querySelectorAll(".bookBack");
let pdfs = document.querySelectorAll(".pdf");
let imgs = document.querySelectorAll(".book-box .book-img img");
let homeImgs = document.querySelectorAll(".book");
const blob = document.getElementById("blob");
const homeSec = document.querySelector(".home");
const aboutSec = document.querySelector(".about");
const booksSec = document.querySelector(".books");
const flippingbookSec = document.querySelector(".flippingbook");

window.addEventListener("load", () => {
  const loader = document.querySelector(".loading-holder");
  loader.classList.add("loading-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });

  setTimeout(() => {
    logdiv.style.top = "50px";
  }, 500);

  fP.style.right = "50%";
  sP.style.right = "calc(50% - (50% / 3))";

  if (window.matchMedia("(max-width: 500px)").matches) {
    thP.style.bottom = "30%";
  } else {
    thP.style.bottom = "20%";
  }
});

let lights = "off";
if (switcher) {
  switcher.addEventListener("click", () => {
    if (lights == "off") {
      blob.style.display = "none";

      fP.style.bottom = "20%";
      sP.style.bottom = "15%";
      thP.style.bottom = "10%";

      function myFunction() {
        if (window.matchMedia("(max-width: 500px)").matches) {
          setTimeout(() => {
            home.style.right = "30%";
          }, 500);
          setTimeout(() => {
            books.style.top = "25%";
            setTimeout(() => {
              books.style.right = "30%";
            }, 600);
          }, 800);
          about.style.display = "block";
          setTimeout(() => {
            about.style.right = "5%";
          }, 1100);

          logdiv.style.top = "10px";
          logdiv.style.left = "10px";
        } else if (window.matchMedia("(max-width: 767px)").matches) {
          setTimeout(() => {
            home.style.right = "50%";
          }, 500);
          setTimeout(() => {
            books.style.top = "15%";
            books.style.right = "20%";
          }, 800);
          about.style.display = "block";
          setTimeout(() => {
            about.style.right = "5%";
          }, 1100);

          logdiv.style.top = "25px";
          logdiv.style.left = "25px";
        } else {
          setTimeout(() => {
            home.style.right = "60%";
          }, 500);
          setTimeout(() => {
            books.style.top = "10%";
          }, 800);
          about.style.display = "block";
          setTimeout(() => {
            about.style.right = "10%";
          }, 1100);

          logdiv.style.top = "50px";
          logdiv.style.left = "50px";
        }
      }

      var x = window.matchMedia("(max-width: 767px)");
      var y = window.matchMedia("(max-width: 500px)");
      myFunction();
      x.addEventListener("change", myFunction);

      oSpan.style.left = "85px";
      logdiv.style.transform = "unset";

      logif.src = logif.src;
      logdiv.style.opacity = "1";
      links.forEach((li) => {
        li.style.opacity = ".5";
      });
      light.style.display = "block";
      on.style.display = "block";
      off.style.display = "none";
      darkness.style.display = "none";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      lights = "on";
    } else {
      blob.style.display = "block";
      logdiv.style.opacity = ".5";
      links.forEach((li) => {
        li.style.opacity = ".1";
      });
      light.style.display = "none";
      on.style.display = "none";
      off.style.display = "block";
      darkness.style.display = "block";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
      lights = "off";
    }
  });
}

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.style.left = `${clientX}px`;
  blob.style.top = `${clientY}px`;
};

about.addEventListener("click", () => {
  aboutSec.style.display = "block";
  homeSec.style.display = "none";
  booksSec.style.display = "none";
});

books.addEventListener("click", () => {
  booksSec.style.display = "block";
  homeSec.style.display = "none";
  aboutSec.style.display = "none";
  booksSec.style.backgroundImage = "none";

  document.querySelector(".books-overlay").style.backgroundColor =
    "transparent";
  document.body.style.overflowY = "auto";
  document.body.style.backgroundImage = "url(./media/Images/landing-bg.jpg)";
  document.body.style.backgroundSize = "cover";
});

aboutBackBtn.addEventListener("click", () => {
  homeSec.style.display = "block";
  booksSec.style.display = "none";
  aboutSec.style.display = "none";
});

booksBackBtn.addEventListener("click", () => {
  homeSec.style.display = "block";
  booksSec.style.display = "none";
  aboutSec.style.display = "none";
  document.body.style.overflowY = "hidden";
});

function startReading() {
  homeSec.style.display = "none";
  booksSec.style.display = "none";
  aboutSec.style.display = "none";
}

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    flippingbookSec.style.display = "block";
    document.body.style.overflowY = "hidden";
    startReading();
    pdfs.forEach((pdf) => {
      if (img.id == pdf.dataset.id) {
        pdf.style.display = "block";
      }
    });
  });
});

homeImgs.forEach((img) => {
  img.addEventListener("click", () => {
    flippingbookSec.style.display = "block";
    document.body.style.overflowY = "hidden";
    startReading();
    pdfs.forEach((pdf) => {
      if (img.dataset.id == pdf.dataset.id) {
        pdf.style.display = "block";
      }
    });
  });
});

bookBack.forEach((back) => {
  back.addEventListener("click", () => {
    document.body.style.overflowY = "auto";
    booksSec.style.display = "block";
    flippingbookSec.style.display = "none";
    pdfs.forEach((pdf) => {
      pdf.style.display = "none";
    });
  });
});
