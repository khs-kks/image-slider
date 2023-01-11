const picture = document.querySelector("img");
const pictureWrapper = document.querySelector(".picture");
const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");
const allDots = document.querySelectorAll(".dot");

const imgs = [
  "./images/pexels-francesco-1785283.jpg",
  "./images/pexels-paul-ijsendoorn-33041.jpg",
  "./images/pexels-sam-kolder-2387873.jpg",
  "./images/pexels-tobias-bjørkli-2113566.jpg",
];

function addEvents() {
  btnPrevious.addEventListener("click", () => {
    let indx = +document.querySelector("img").getAttribute("data-index");

    if (indx > 0) {
      renderPicture(indx - 1);
      //   picture.setAttribute("src", imgs[indx - 1]);
      //   picture.setAttribute("data-index", indx - 1);
      renderDots();
    }
  });

  btnNext.addEventListener("click", () => {
    let indx = +document.querySelector("img").getAttribute("data-index");

    if (indx < imgs.length - 1) {
      renderPicture(indx + 1);
      //   picture.setAttribute("src", imgs[indx + 1]);
      //   picture.setAttribute("data-index", indx + 1);
      renderDots();
    }
  });

  allDots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let indx = +dot.getAttribute("data-index");
      renderPicture(indx);
      //   picture.setAttribute("src", imgs[indx]);
      //   picture.setAttribute("data-index", indx);
      renderDots();
    });
  });
}

function renderPicture(indx) {
  pictureWrapper.innerHTML = "";

  const newImg = document.createElement("img");
  newImg.src = imgs[indx];
  newImg.alt = "Random Image";
  newImg.height = "550";
  newImg.width = "820";
  newImg.dataset.index = indx;

  pictureWrapper.appendChild(newImg);
}

function renderDots() {
  let indx = +document.querySelector("img").getAttribute("data-index");
  //   let indx = +picture.getAttribute("data-index");
  allDots.forEach((dot) => {
    dot.classList.remove("active");
    if (+dot.getAttribute("data-index") === indx) {
      dot.classList.add("active");
    }
  });
}

function nextImage() {
  const currentImage = document.querySelector("img");
  let currentIndex = +currentImage.dataset.index;
  
  currentIndex = (currentIndex + 1) % imgs.length;
  console.log(currentIndex);
  renderPicture(currentIndex);
  renderDots();
  setTimeout(nextImage, 5000);
}

function init() {
  picture.setAttribute("src", imgs[0]);
  picture.setAttribute("data-index", 0);
  allDots[0].classList.toggle("active");

  addEvents();
  setTimeout(nextImage, 5000);
  //   nextImage();
}

init();
