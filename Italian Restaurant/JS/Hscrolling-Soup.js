
//HScrolling-Soup

const slide1Btn = document.getElementById('soup__slide1');
const slide2Btn = document.getElementById('soup__slide2');
const slide3Btn = document.getElementById('soup__slide3');
const ingredientsCont = document.getElementsByClassName('soup__ingredients-container')[0]
let number = document.getElementById('soup__number');
const img1 = document.getElementById('soup__image1');
const img2 = document.getElementById('soup__image2');
const img3 = document.getElementById('soup__image3');

slide1Btn.addEventListener('click',()=>{
    slide1Btn.classList.add('soup__slide--selected');
    slide2Btn.classList.remove('soup__slide--selected');
    slide3Btn.classList.remove('soup__slide--selected');
    document.getElementsByClassName("soup__ingredients-list--1")[0].style.display="flex";
    document.getElementsByClassName("soup__ingredients-list--2")[0].style.display="none";
    document.getElementsByClassName("soup__ingredients-list--3")[0].style.display="none";
    // ingredientsCont.style.setProperty('--orange',backgroundColor);
    ingredientsCont.style.cssText="background-color:orange"
    number.innerHTML = "01";

    img1.style.cssText="display:all;";
    img2.style.cssText="right:0; left:auto; transform:translate(50%, 0); height:540px; width:527px";
    img3.style.cssText="display:none";

    slide1Btn.setAttribute('aria-pressed',true);
    slide2Btn.setAttribute('aria-pressed',false);
    slide3Btn.setAttribute('aria-pressed',false);
})
slide2Btn.addEventListener('click',()=>{
    slide1Btn.classList.remove('soup__slide--selected');
    slide2Btn.classList.add('soup__slide--selected');
    slide3Btn.classList.remove('soup__slide--selected');
    document.getElementsByClassName("soup__ingredients-list--2")[0].style.display="flex";
    document.getElementsByClassName("soup__ingredients-list--1")[0].style.display="none";
    document.getElementsByClassName("soup__ingredients-list--3")[0].style.display="none";
    ingredientsCont.style.cssText="background-color:red";
    number.innerHTML = "02";

    img1.style.cssText="display:none";
    img2.style.cssText="left:50%; right:auto; transform:translate(-30%, 0); height:696px; width:679px";
    img3.style.cssText="display:block; right:0; left:auto; transform:translate(50%, 0); height:540px; width:527px";

    slide1Btn.setAttribute('aria-pressed',false);
    slide2Btn.setAttribute('aria-pressed',true);
    slide3Btn.setAttribute('aria-pressed',false);
})
slide3Btn.addEventListener('click',()=>{
    slide1Btn.classList.remove('soup__slide--selected');
    slide2Btn.classList.remove('soup__slide--selected');
    slide3Btn.classList.add('soup__slide--selected');
    document.getElementsByClassName("soup__ingredients-list--3")[0].style.display="flex";
    document.getElementsByClassName("soup__ingredients-list--1")[0].style.display="none";
    document.getElementsByClassName("soup__ingredients-list--2")[0].style.display="none";
    ingredientsCont.style.cssText="background-color:brown";
    number.innerHTML = "03";
    
    img1.style.cssText="display:none";
    img2.style.cssText="display:none";
    img3.style.cssText="display:block; left:50%; right:auto; transform:translate(-30%, 0); height:696px; width:679px";

    slide1Btn.setAttribute('aria-pressed',false);
    slide2Btn.setAttribute('aria-pressed',false);
    slide3Btn.setAttribute('aria-pressed',true);
})

//Soup--Center-on-Load
window.addEventListener("load", function(e){
   var imgContainer = document.querySelector(".pastas__imagesWrap");
   var middle = imgContainer.children[Math.floor((imgContainer.children.length - 1) / 2)];
   imgContainer.scrollLeft = middle.offsetLeft +
    middle.offsetLeft / 2 - imgContainer.offsetLeft / 2;
});

//H-Scrolling-Soup

const buttonRight = document.getElementsByClassName('pastas__nextBtn')[0]
const buttonLeft = document.getElementsByClassName('pastas__prevBtn')[0]

buttonRight.onclick = function () {
   document.getElementsByClassName('pastas__imagesWrap')[0].scrollLeft += 500;
 };
 buttonLeft.onclick = function () {
   document.getElementsByClassName('pastas__imagesWrap')[0].scrollLeft -= 500;
 };
//VerticalScrolling-Wine

const wineText1 = document.getElementsByClassName('wine__text--1')[0]
const wineText2 = document.getElementsByClassName('wine__text--2')[0]
const wineText3 = document.getElementsByClassName('wine__text--3')[0]
const wineText4 = document.getElementsByClassName('wine__text--4')[0]
const wineText5 = document.getElementsByClassName('wine__text--5')[0]

const wineImg1 = document.getElementsByClassName('wine__image1')[0]
const wineImg2 = document.getElementsByClassName('wine__image2')[0]
const wineImg3 = document.getElementsByClassName('wine__image3')[0]
const wineImg4 = document.getElementsByClassName('wine__image4')[0]
const wineImg5 = document.getElementsByClassName('wine__image5')[0]

const verticalBtn1 = document.querySelector('.wine__vertical-Btn--1');
const verticalBtn2 = document.querySelector('.wine__vertical-Btn--2');
const verticalBtn3 = document.querySelector('.wine__vertical-Btn--3');
const verticalBtn4 = document.querySelector('.wine__vertical-Btn--4');
const verticalBtn5 = document.querySelector('.wine__vertical-Btn--5');

 verticalBtn1.addEventListener('click',()=>{
    verticalBtn1.classList.add('wine__active');
    verticalBtn2.classList.remove('wine__active');
    verticalBtn3.classList.remove('wine__active');
    verticalBtn4.classList.remove('wine__active');
    verticalBtn5.classList.remove('wine__active');

    wineText1.classList.add('wine__text-display');
    wineText2.classList.remove('wine__text-display');
    wineText3.classList.remove('wine__text-display');
    wineText4.classList.remove('wine__text-display');
    wineText5.classList.remove('wine__text-display');

    wineImg1.classList.add('img-display');
    wineImg2.classList.remove('img-display');
    wineImg3.classList.remove('img-display');
    wineImg4.classList.remove('img-display');
    wineImg5.classList.remove('img-display');
    
    

    verticalBtn1.innerHTML = '01';
    verticalBtn2.innerHTML = '';
    verticalBtn3.innerHTML = '';
    verticalBtn4.innerHTML = '';
    verticalBtn5.innerHTML = '';
    
 })
 verticalBtn2.addEventListener('click',()=>{
    verticalBtn1.classList.remove('wine__active');
    verticalBtn2.classList.add('wine__active');
    verticalBtn3.classList.remove('wine__active');
    verticalBtn4.classList.remove('wine__active');
    verticalBtn5.classList.remove('wine__active');
    
    
    wineText1.classList.remove('wine__text-display');
    wineText2.classList.add('wine__text-display');
    wineText3.classList.remove('wine__text-display');
    wineText4.classList.remove('wine__text-display');
    wineText5.classList.remove('wine__text-display');

    wineImg1.classList.remove('img-display');
    wineImg2.classList.add('img-display');
    wineImg3.classList.remove('img-display');
    wineImg4.classList.remove('img-display');
    wineImg5.classList.remove('img-display');
    

    verticalBtn1.innerHTML = '';
    verticalBtn2.innerHTML = '02';
    verticalBtn3.innerHTML = '';
    verticalBtn4.innerHTML = '';
    verticalBtn5.innerHTML = '';
    
 })
 verticalBtn3.addEventListener('click',()=>{
    verticalBtn1.classList.remove('wine__active');
    verticalBtn2.classList.remove('wine__active');
    verticalBtn3.classList.add('wine__active');
    verticalBtn4.classList.remove('wine__active');
    verticalBtn5.classList.remove('wine__active');

    
    wineText1.classList.remove('wine__text-display');
    wineText2.classList.remove('wine__text-display');
    wineText3.classList.add('wine__text-display');
    wineText4.classList.remove('wine__text-display');
    wineText5.classList.remove('wine__text-display');

    wineImg1.classList.remove('img-display');
    wineImg2.classList.remove('img-display');
    wineImg3.classList.add('img-display');
    wineImg4.classList.remove('img-display');
    wineImg5.classList.remove('img-display');
    
    verticalBtn1.innerHTML = '';
    verticalBtn2.innerHTML = '';
    verticalBtn3.innerHTML = '03';
    verticalBtn4.innerHTML = '';
    verticalBtn5.innerHTML = '';
    
 })
 verticalBtn4.addEventListener('click',()=>{
    verticalBtn1.classList.remove('wine__active');
    verticalBtn2.classList.remove('wine__active');
    verticalBtn3.classList.remove('wine__active');
    verticalBtn4.classList.add('wine__active');
    verticalBtn5.classList.remove('wine__active');

    
    wineText1.classList.remove('wine__text-display');
    wineText2.classList.remove('wine__text-display');
    wineText3.classList.remove('wine__text-display');
    wineText4.classList.add('wine__text-display');
    wineText5.classList.remove('wine__text-display');

    wineImg1.classList.remove('img-display');
    wineImg2.classList.remove('img-display');
    wineImg3.classList.remove('img-display');
    wineImg4.classList.add('img-display');
    wineImg5.classList.remove('img-display');
    

    verticalBtn1.innerHTML = '';
    verticalBtn2.innerHTML = '';
    verticalBtn3.innerHTML = '';
    verticalBtn4.innerHTML = '04';
    verticalBtn5.innerHTML = '';
    
 })
 verticalBtn5.addEventListener('click',()=>{
    verticalBtn1.classList.remove('wine__active');
    verticalBtn2.classList.remove('wine__active');
    verticalBtn3.classList.remove('wine__active');
    verticalBtn4.classList.remove('wine__active');
    verticalBtn5.classList.add('wine__active');

    
    wineText1.classList.remove('wine__text-display');
    wineText2.classList.remove('wine__text-display');
    wineText3.classList.remove('wine__text-display');
    wineText4.classList.remove('wine__text-display');
    wineText5.classList.add('wine__text-display');

    wineImg1.classList.remove('img-display');
    wineImg2.classList.remove('img-display');
    wineImg3.classList.remove('img-display');
    wineImg4.classList.remove('img-display');
    wineImg5.classList.add('img-display');

    verticalBtn1.innerHTML = '';
    verticalBtn2.innerHTML = '';
    verticalBtn3.innerHTML = '';
    verticalBtn4.innerHTML = '';
    verticalBtn5.innerHTML = '05';
    
 })