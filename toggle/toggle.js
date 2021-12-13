"use strict";
const toggleBtn = document.querySelector(".div_color");
const divBox = document.querySelector(".div_box");

function colorBtn() {
    divBox.classList.toggle("toggle_color");
}

toggleBtn.addEventListener("click", colorBtn);

const hBtn = document.querySelector(".h_btn");
const hBox = document.querySelector(".div_h");

function heightClick() {
    hBox.classList.toggle("toggle_h");
}

hBtn.addEventListener("click", heightClick);
//addEventListener에 function이름 앞에 () 붙이지 말기.
