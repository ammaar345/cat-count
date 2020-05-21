const btn=document.querySelector(".btn");
const iCount=document.querySelector(".catsSpottedCounter");

var catsSpotted = 0;
if (localStorage['spotted']){
    // ensure catSpotted is a number
    catsSpotted = Number(localStorage['spotted']);
}
btn.addEventListener('click', function(){
   
    catsSpotted++;
    //store how many times a cat was spotted.
    localStorage['spotted'] = catsSpotted;
   
    iCount.innerHTML=catsSpotted
});