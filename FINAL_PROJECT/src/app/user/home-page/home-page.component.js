var imagelist=["i2.jpg","i3.jpg","i6.jpg"];
var currentIndex=0;
var slideshow=document.getElementById("slideshow");
setInterval(function()
{
    slideshow.src=images[currentIndex];
    currentIndex=(currentIndex+1)%imagelist.length
},4000);