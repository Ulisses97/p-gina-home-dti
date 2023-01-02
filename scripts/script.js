// let myBody = document.querySelector(".body");

let nav1 = document.querySelector("[data-nav='1']")
let nav2 = document.querySelector("[data-nav='2']")
let nav3 = document.querySelector("[data-nav='3']")
let dropdown1 = document.querySelector("[data-nav='1'] ul")
let dropdown2 = document.querySelector("[data-nav='2'] ul")
let dropdown3 = document.querySelector("[data-nav='3'] ul")

let nav1Mobile = document.querySelector("[data-nav-mobile='1']")
let nav2Mobile = document.querySelector("[data-nav-mobile='2']")
let nav3Mobile = document.querySelector("[data-nav-mobile='3']")
let dropdown1Mobile = document.querySelector("[data-nav-mobile='1'] ul")
let dropdown2Mobile = document.querySelector("[data-nav-mobile='2'] ul")
let dropdown3Mobile = document.querySelector("[data-nav-mobile='3'] ul")

// window.addEventListener('scroll',(event) => {
//   console.log('Scrolling...');
// });

nav1.addEventListener("mouseover", ()=>{
  dropdown1.classList.add("active-dropdown");
})
nav1.addEventListener("mouseleave", ()=>{
  dropdown1.classList.remove("active-dropdown");
})
nav2.addEventListener("mouseover", ()=>{
  dropdown2.classList.add("active-dropdown");
})
nav2.addEventListener("mouseleave", ()=>{
  dropdown2.classList.remove("active-dropdown");
})
nav3.addEventListener("mouseover", ()=>{
  dropdown3.classList.add("active-dropdown");
})
nav3.addEventListener("mouseleave", ()=>{
  dropdown3.classList.remove("active-dropdown");
})

nav1Mobile.addEventListener("click", ()=>{
  dropdown1Mobile.classList.toggle("active-dropdown-mobile");
})
nav2Mobile.addEventListener("click", ()=>{
  dropdown2Mobile.classList.toggle("active-dropdown-mobile");
})
nav3Mobile.addEventListener("click", ()=>{
  dropdown3Mobile.classList.toggle("active-dropdown-mobile");
})

let btnMenu = document.querySelector('.btn-menu');
let btnRef = document.querySelector('.btn-menu span');
let menuMobile = document.querySelector('.menu-mobile');

btnMenu.addEventListener('click', () =>{
  btnRef.classList.toggle("active");
  menuMobile.classList.toggle('activeMenuMobile');
})