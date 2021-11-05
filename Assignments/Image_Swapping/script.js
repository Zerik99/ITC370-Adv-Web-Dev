
var largeImage = document.getElementById("mainImg");
var thumbnail1 = document.getElementById("tn1");
console.log(thumbnail1);
var thumbnail2 = document.getElementById("tn2");
console.log(thumbnail1);
var thumbnail3 = document.getElementById("tn3");
console.log(thumbnail3);
var thumbnail4 = document.getElementById("tn4");
console.log(thumbnail4);

largeImage.addEventListener("dblclick", ChangeImageSet);
thumbnail1.addEventListener("click", ChangeMainImage1);
thumbnail2.addEventListener("click", ChangeMainImage2);
thumbnail3.addEventListener("click", ChangeMainImage3);
thumbnail4.addEventListener("click", ChangeMainImage4);

function ChangeMainImage1(){
largeImage.src = "images/Picture1.jpg";
console.log("ChangeMainImage1 function was called.");
}
function ChangeMainImage2(){
largeImage.src = "images/Picture2.jpg";
console.log("ChangeMainImage2 function was called.");
}
function ChangeMainImage3(){
largeImage.src = "images/Picture3.jpg";
console.log("ChangeMainImage3 function was called.");
}
function ChangeMainImage4(){
largeImage.src = "images/Picture4.jpg";
console.log("ChangeMainImage4 function was called.");
}
function ChangeImageSet(){
    largeImage.src = "images/Picture5.jpg";
    thumbnail1.src = "images/Picture5.jpg";
    thumbnail2.src = "images/Picture6.jpg";
    thumbnail3.src = "images/Picture7.jpg";
    thumbnail4.src = "images/Picture8.jpg";
console.log("ChangeImageSet function was called.");
}