var iframe = parent.document.getElementById('contentsrc');
var activeprv = parent.document.getElementsByClassName("is-active"); 
var indicator = parent.document.querySelector('.nav-indicator');

var homepage = parent.document.getElementById("homepage");
var aboutus = parent.document.getElementById("aboutus");
var dictionary = parent.document.getElementById("dictionary");
var measure = parent.document.getElementById("measure");
var upload = parent.document.getElementById("upload");
var uav = parent.document.getElementById("uav");

window.addEventListener('load', handleLoad);
window.addEventListener('resize', handleResize);

function handleLoad() {
    var main_img = document.getElementById("main_img").offsetHeight;
    var mainimg = document.getElementById("mainimg");
  
    mainimg.style.height = main_img + "px";
  }
  
  function handleResize() {
    var main_img = document.getElementById("main_img").offsetHeight;
    var mainimg = document.getElementById("mainimg");
  
    mainimg.style.height = main_img + "px";
  }

  function hptoabtus() {
    homepage.classList.remove("is-active");
    homepage.removeAttribute('style');

    aboutus.classList.add("is-active");

    indicator.style.width = "".concat(aboutus.offsetWidth, "px");
    indicator.style.left = "".concat(aboutus.offsetLeft, "px");
    indicator.style.backgroundColor = aboutus.getAttribute('active-color');
    aboutus.classList.add('is-active');
    aboutus.style.color = aboutus.getAttribute('active-color');
    aboutus.style.fontWeight = "bold";

    // Cập nhật nội dung iframe
    parent.document.title = "Giới thiệu";
    iframe.src = "../function/aboutus.html";
}

function hptodict() {
    homepage.classList.remove("is-active");
    homepage.removeAttribute('style');

    dictionary.classList.add("is-active");

    indicator.style.width = "".concat(dictionary.offsetWidth, "px");
    indicator.style.left = "".concat(dictionary.offsetLeft, "px");
    indicator.style.backgroundColor = dictionary.getAttribute('active-color');
    dictionary.classList.add('is-active');
    dictionary.style.color = dictionary.getAttribute('active-color');
    dictionary.style.fontWeight = "bold";

    // Cập nhật nội dung iframe
    parent.document.title = "Giới thiệu";
    iframe.src = "../function/dictionary.html";
}

function hptomeasure() {
    homepage.classList.remove("is-active");
    homepage.removeAttribute('style');

    measure.classList.add("is-active");

    indicator.style.width = "".concat(measure.offsetWidth, "px");
    indicator.style.left = "".concat(measure.offsetLeft, "px");
    indicator.style.backgroundColor = measure.getAttribute('active-color');
    measure.classList.add('is-active');
    measure.style.color = measure.getAttribute('active-color');
    measure.style.fontWeight = "bold";

    // Cập nhật nội dung iframe
    parent.document.title = "Giới thiệu";
    iframe.src = "../function/measure.html";
}

function hptoup() {
    homepage.classList.remove("is-active");
    homepage.removeAttribute('style');

    upload.classList.add("is-active");

    indicator.style.width = "".concat(upload.offsetWidth, "px");
    indicator.style.left = "".concat(upload.offsetLeft, "px");
    indicator.style.backgroundColor = upload.getAttribute('active-color');
    upload.classList.add('is-active');
    upload.style.color = upload.getAttribute('active-color');
    upload.style.fontWeight = "bold";

    // Cập nhật nội dung iframe
    parent.document.title = "Giới thiệu";
    iframe.src = "../function/upload.html";
}

function hptouav() {
    homepage.classList.remove("is-active");
    homepage.removeAttribute('style');

    uav.classList.add("is-active");

    indicator.style.width = "".concat(uav.offsetWidth, "px");
    indicator.style.left = "".concat(uav.offsetLeft, "px");
    indicator.style.backgroundColor = uav.getAttribute('active-color');
    uav.classList.add('is-active');
    uav.style.color = uav.getAttribute('active-color');
    uav.style.fontWeight = "bold";

    // Cập nhật nội dung iframe
    parent.document.title = "Giới thiệu";
    iframe.src = "../function/uav.html";
}

// Thư viện


// Images Area Images
let imagesAreaImages = document.querySelectorAll('.images-area img');
// Images Area First Image
let imagesAreaFirstImage = document.querySelector('.images-area .firstImage');

// Previous And Next Buttons
let previousBtn = document.querySelector('.previous-btn');
let nextBtn = document.querySelector('.next-btn');

// Pagination Area 
let paginationArea = document.querySelector('.pagination-area');

// Current Image Count
let currentImageCount = 1;

// Slider Controler Function
let sliderController;
// Create Pagination Spans Function
let createPaginationSpans;

// Every Click On Buttons
previousBtn.addEventListener('click', previousImage);
nextBtn.addEventListener('click', nextImage);


// Previous Image Function
function previousImage() {
  // If The currentImageCount Is 1
  if(currentImageCount === 1){
    return false;
  }else{ // Else
    // Minus One From currentImageCount
    currentImageCount--;
    // Call Function sliderController();
    sliderController();

  };
};

// Next Image Function
function nextImage() {
  // If The currentImageCount Is imagesAreaImages.length
  if(currentImageCount === imagesAreaImages.length){
    return false;
  }else{ // Else
    // Plus One To currentImageCount
    currentImageCount++;
    // Call Function sliderController();
    sliderController();
  };
};

// Create Pagination Spans [Circls] Function
(function createPaginationSpans(){
  // Loop On All The Images Slider
  for(var i = 0; i < imagesAreaImages.length; i++){
    // Create Span 
    let paginationSpan = document.createElement('span');
    // Append The Span
    paginationArea.appendChild(paginationSpan)
  };
})();

// Slider Controler Function
(sliderController = function (){
  // Get All The pagination Spans
  let paginationCircls = document.querySelectorAll('.pagination-area span');

  // Call Remore All Active Class Function
  removeAllActive(paginationCircls);
  
  // Call Remore Active Button Function
  activeButton();

  // The currentImageCount Minus One
  let currentImageMinusOne = currentImageCount - 1;

  // Set Active Class On Current Pagination
  paginationCircls[currentImageMinusOne].classList.add('active');

  // Move The images Area First Image
  imagesAreaFirstImage.style.marginLeft = `-${600 * currentImageMinusOne}px`;
  console.log(600 * currentImageMinusOne);
})();

// Remove All Active Class Function
function removeAllActive(targetElement){
  for(var i = 0; i < targetElement.length; i++){
    targetElement[i].classList.remove('active');
  };
};

// Check Active Button Function
function activeButton() {
  // If The Current Image Count Equle 1
  currentImageCount === 1 ? 
  // Hide The Previous Button
  previousBtn.classList.add('disabled') : 
  // Else: Show The Previous Button
  previousBtn.classList.remove('disabled');

  // If The Current Image Count Equle imagesAreaImages.length
  currentImageCount === imagesAreaImages.length ? 
  // Hide The Next Button
  nextBtn.classList.add('disabled') : 
  // Else: Show The Next Button
  nextBtn.classList.remove('disabled');
};

// Move Slider Image Every 3 Second 
setInterval(() => {
  // If The Current Image Count Not Equle imagesAreaImages.length
  if(currentImageCount != imagesAreaImages.length){
    // Plus One
    currentImageCount++;
    // Call Function sliderController();
    sliderController();
  }else{ // else
    // Make currentImageCount Equle 1
    currentImageCount = 1;
    // Call Function sliderController();
    sliderController();
  };
}, 3000);

// :)




