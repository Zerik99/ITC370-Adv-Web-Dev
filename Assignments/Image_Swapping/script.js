
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
largeImage.src = thumbnail1.src;
console.log("ChangeMainImage1 function was called.");
}
function ChangeMainImage2(){
largeImage.src = thumbnail2.src;
console.log("ChangeMainImage2 function was called.");
}
function ChangeMainImage3(){
largeImage.src = thumbnail3.src;
console.log("ChangeMainImage3 function was called.");
}
function ChangeMainImage4(){
largeImage.src = thumbnail4.src;
console.log("ChangeMainImage4 function was called.");
}
function ChangeImageSet(){

    if(largeImage.class != "img-Main dogImg")
    {
    largeImage.src = "images/Picture5.jpg";
    largeImage.class = "img-Main dogImg";

    thumbnail1.src = "images/Picture5.jpg";
    thumbnail1.class = "img-thumbnail dogImg";

    thumbnail2.src = "images/Picture6.jpg";
    thumbnail2.class = "img-thumbnail dogImg";

    thumbnail3.src = "images/Picture7.jpg";
    thumbnail3.class = "img-thumbnail dogImg";

    thumbnail4.src = "images/Picture8.jpg";
    thumbnail4.class = "img-thumbnail dogImg";
    }
    else
    {
    largeImage.src = "images/Picture1.jpg";
    largeImage.class = "img-Main catImg";

    thumbnail1.src = "images/Picture1.jpg";
    thumbnail1.class = "img-thumbnail catImg";

    thumbnail2.src = "images/Picture2.jpg";
    thumbnail2.class = "img-thumbnail dogImg";

    thumbnail3.src = "images/Picture3.jpg";
    thumbnail3.class = "img-thumbnail catImg";

    thumbnail4.src = "images/Picture4.jpg";
    thumbnail4.class = "img-thumbnail catImg";
    }

console.log("ChangeImageSet function was called.");
}