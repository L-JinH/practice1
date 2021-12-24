"use strict";

// background-color
const toggleBtn = document.querySelector(".div_color");
const divBox = document.querySelector(".div_box");

function colorBtn() {
    divBox.classList.toggle("toggle_color");
}

toggleBtn.addEventListener("click", colorBtn);

// border-radius
const hBtn = document.querySelector(".h_btn");
const hBox = document.querySelector(".div_h");

function heightClick() {
    hBox.classList.toggle("toggle_h");
}

hBtn.addEventListener("click", heightClick);
//addEventListener에 function이름 앞에 () 붙이지 말기.

// transition
const transDiv = document.querySelector(".trans_div");
const transBtn = document.querySelector(".trans_btn");

function transClick() {
    transDiv.classList.toggle("trans_hover");
}

transBtn.addEventListener("click", transClick);

// keyframe
const ListBtn = document.querySelector(".main_btn");
const ListSub = document.querySelectorAll(".sub_list");

function ListClick() {
    document.querySelector(".hidden").classList = "show";
}

ListBtn.addEventListener("click", ListClick);
