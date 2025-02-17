"use strict";

var current = "homepage"; 
var indicator = document.querySelector('.nav-indicator');
var items = document.querySelectorAll('.nav-item_link');
var nav = document.getElementById("nav");
var allnav = document.querySelectorAll("#nav");
var iframe = document.getElementById('contentsrc');

var searchDiv = document.getElementById("search_div");
var searchInput = document.getElementById("search_input");
var searchIcon = document.getElementById("search_icon");
var inputValue = searchInput.value;

function handleIndicator(el) {
  items.forEach(function (item) {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  indicator.style.width = "".concat(el.offsetWidth, "px");
  indicator.style.left = "".concat(el.offsetLeft, "px");
  indicator.style.backgroundColor = el.getAttribute('active-color');
  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
  el.style.fontWeight = "bold";
}

items.forEach(function (item, index) {
  item.addEventListener('click', function (e) {
    handleIndicator(e.target);
    var currentElement = document.getElementsByClassName("is-active")[0];
    current = currentElement.id; // Gán giá trị cho biến current
    gopage(); // Gọi hàm gopage() sau khi đã có giá trị cho current
  });
  item.classList.contains('is-active') && handleIndicator(item);
});

// iframe.contentWindow.addEventListener('wheel', handleScroll);
// let isScrolledToTop = false;

// function checkScrollPosition() {
//   if (iframe.contentWindow.scrollY <= 256) {
//     isScrolledToTop = true;
//   } else {
//     isScrolledToTop = false;
//   }
// }

// function handleScroll(event) {
//   checkScrollPosition();

//   if (isScrolledToTop) {
//     nav.style.display = "inline-flex";
//   } else if (!isScrolledToTop && event.deltaY > 0) {
//     nav.style.display = "inline-flex";
//   } else if (!isScrolledToTop && event.deltaY < 0) {
//     nav.style.display = "none";
//   }
// }

// iframe.contentWindow.addEventListener("scroll", function() {
//   checkScrollPosition();
// });

function up (){
  iframe.contentWindow.scrollTo({
      top: 0,
      behavior: 'smooth'
  });

  nav.style.display="inline-flex";
}

// Gắn sự kiện keypress vào trường input
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của Enter (ví dụ: gửi biểu mẫu)
      performSearch();
    }
  });

async function search_ip() {
  await firstStatement();
  await secondStatement();
}

async function firstStatement() {
  searchInput.style.display = "inline";
  setTimeout(function() {
    searchInput.classList.add("show"); // Thêm class "show" để hiển thị search input với kích thước kéo dài
  }, 0); // Đợi 0ms trước khi thêm class "show"

  searchIcon.style.display = "inline";
}

async function secondStatement() {
  function handleOutsideClick(event) {
    var targetElement = event.target;
  
    // Kiểm tra nếu không phải là searchInput hoặc là một phần tử con của searchInput
    if (targetElement !== searchDiv && !searchDiv.contains(targetElement) && inputValue.trim() === "") {
      searchInput.classList.remove("show"); // Xóa class "show" để thu hẹp search input
  
      setTimeout(function() {
        searchInput.style.display = "none";
      }, 600); // Đợi 1s trước khi ẩn searchInput hoàn toàn
    }
  }
  
  document.addEventListener("click", handleOutsideClick);
  iframe.contentWindow.document.addEventListener("click", handleOutsideClick);
}

function performSearch() {
  search_ip();
  searchInput.addEventListener("input", function(event) {
    inputValue = event.target.value;
  });
  if (inputValue.trim() !== "" && searchInput.style.display == "inline") {
    window.alert("chuyển tới trang tìm kiếm");
  }
}

var titlename = "Trang chủ"; 

function gopage() {
  iframe.src = "../function/" + current + ".html";
  if (current === "homepage") {
    titlename = "Trang chủ"; 
  }
  if (current === "aboutus") {
    titlename = "Giới thiệu"; 
  }
  if (current === "dictionary") {
    titlename = "Thư viện"; 
  }
  if (current === "upload") {
    titlename = "Tải lên"; 
  }
  if (current === "uav") {
    titlename = "UAV"; 
  }

  document.title = titlename; 
}

iframe.addEventListener("load", function() {
  allnav.forEach(function(navItem) {
    navItem.style.display = "inline-flex";
  });
});

