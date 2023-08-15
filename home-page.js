let menu1;
let menu2;
let menu3;
let menu4;

window.onload = (event) => {
    menu1 = document.getElementById("menu1");
    menu2 = document.getElementById("menu2");
    menu3 = document.getElementById("menu3");
    menu4 = document.getElementById("menu4");
};

function myFunction() {
    document.getElementsByClassName("btn1");
}

function myFunction2() {
    document.getElementsByClassName("btn2");
}

function showMarmariDetails() {
    removeActiveFromMenu();

    let marmari = document.getElementById("marmari");
    marmari.classList.add("active");


    menu1.style.display = "inline";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "none";
} 

function showParaliesDetails() {
    removeActiveFromMenu();

    let paralies = document.getElementById("paralies");
    paralies.classList.add("active");

    menu1.style.display = "none";
    menu2.style.display = "inline";
    menu3.style.display = "none";
    menu4.style.display = "none";
}

function showTavernesDetails() {
    removeActiveFromMenu();

    let tavernes = document.getElementById("tavernes");
    tavernes.classList.add("active");

    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "inline";
    menu4.style.display = "none";
}

function showKontinoiProorismoiDetails() {
    removeActiveFromMenu();

    let marmari = document.getElementById("kontinoi-proorismoi");
    marmari.classList.add("active");

    menu1.style.display = "none";
    menu2.style.display = "none";
    menu3.style.display = "none";
    menu4.style.display = "inline";
}

function removeActiveFromMenu() {
    let el = document.getElementsByClassName("active")
    el[0].classList.remove("active");
}