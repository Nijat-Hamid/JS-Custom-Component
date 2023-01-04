//Accordion JS
let acc = document.getElementsByClassName("accordion-header");
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("accordion-body-active");
    this.lastElementChild.lastElementChild.classList.toggle("fa-lock-open");
    this.lastElementChild.lastElementChild.classList.toggle("accordion-color");
    this.lastElementChild.classList.toggle("accordion-color");
    this.lastElementChild.style.borderColor = "rgba(191, 188, 185, 0.8)";
  });
}
// Slider JS
let slideIndex = 1;
Slider(slideIndex);
function sliderCont(n) {
  Slider((slideIndex += n));
}
function Slider(n) {
  let sliderItem = document.getElementsByClassName("slider-item"),
    sliderDot = document.getElementsByClassName("indicator-btn");
  if (n > sliderItem.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = sliderItem.length;
  }
  for (i = 0; i < sliderItem.length; i++) {
    sliderItem[i].className = sliderItem[i].className.replace(
      " slider-item-active",
      ""
    );
  }
  for (i = 0; i < sliderDot.length; i++) {
    sliderDot[i].className = sliderDot[i].className.replace(
      " active-indicator",
      ""
    );
  }
  sliderItem[slideIndex - 1].classList.add("slider-item-active");
  sliderDot[slideIndex - 1].classList.add("active-indicator");
}
// Calculator JS
let a = document.getElementById("input1"),
  b = document.getElementById("input2"),
  c = document.querySelector(".result"),
  o = document.getElementsByClassName("operation"),
  numb=document.getElementsByClassName('numbers');
for (i = 0; i < o.length; i++) {
  if (i == 0) {
    o[i].onclick = () => {
      c.innerText = (parseFloat(a.value) + parseFloat(b.value)).toFixed(2);
    };
  }else if(i==1){
    o[i].onclick=()=>{
        c.innerText = (parseFloat(a.value) - parseFloat(b.value)).toFixed(1);
    }
  }else if(i==2){
    o[i].onclick=()=>{
        c.innerText = (parseFloat(a.value) * parseFloat(b.value)).toFixed(1);
    }
  }else if(i==3){
    o[i].onclick=()=>{
        c.innerText = (parseFloat(a.value) / parseFloat(b.value)).toFixed(1);
    }
  }else if(i==4){
    o[i].onclick=()=>{
        c.innerText = ((parseFloat(a.value) * parseFloat(b.value)) / 100).toFixed(1); 
    }
  }else if(i==5){
    o[i].onclick=()=>{
        c.innerText = Math.pow(parseFloat(a.value),parseFloat(b.value)); 
    }
  }else if(i==6){
    o[i].onclick=()=>{
        c.innerText='?'
        a.value='';
        b.value=''
    }
  }
}
function inputTyper(x){
        for(i=0;i<numb.length;i++){
            numb[i].onclick=function(){
                x.value+=this.innerText
            }
        }
}
