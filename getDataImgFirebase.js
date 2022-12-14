//DOM
const $ = document.querySelector.bind(document);

const loading = $(".loading");
const canvas_paint = $("#canvas-project");

import dataImgs from "./Data/url-image-address-data-default-rtdb-export.json" assert { type: "json" };

//validate
let arrImgs1 = [];
let arrImgs2 = [];

// Gọi Dữ liệu
function getValue() {
  arrImgs1 = dataImgs[0];
  arrImgs2 = dataImgs[1];

  getDataImgUrl(arrImgs1, arrImgs2);
  setTimeout(function () {
    hideLoadingCanvas();
  }, 3000);
}
// Ẩn loading
function hideLoadingCanvas() {
  loading.style.display = "none";
  canvas_paint.style.display = "block";
  canvas_paint.style.transition = "1s ease-in-out";
}

// show loading
function showLoadingCanvas() {
  loading.style.display = "block";
}

// lấy giá trị dữ liệu từ firebase
window.addEventListener(
  "load",
  () => {
    showLoadingCanvas();
    getValue();
  },
  false
);
