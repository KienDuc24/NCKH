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

// Upload





