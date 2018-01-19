
var forEach= function(pointsArray, calBack){
for(i=0;i<pointsArray.length; i++){
  calBack(pointsArray[i]);
}
}
/*function calBack(index) {
  points[i].style.opacity = 1;
  points[i].style.transform = "scaleX(1) translateY(0)";
  points[i].style.msTransform = "scaleX(1) translateY(0)";
  points[i].style.WebkitTransform = "scaleX(1) translateY(0)";

}

forEach(pointsArray,calBack);
