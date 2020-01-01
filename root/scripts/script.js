window.onload = function () {
  document.getElementById("infoBox").style.visibility = "visible";
  document.getElementById("infoBox").style.border = "5px solid #ea0253";
  document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid1.JPG"  id="infoBoxImage">';
}


function info(obj) {

  if ( obj.id  == "minimeerimisNupp") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid2.JPG"  id="infoBoxImage">';
  }
  else if (obj.id  == "suurendamis/vähendamisNupp") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid3.JPG"  id="infoBoxImage"> <img width="500" src="./images/WinKeys.JPG"  id="infoBoxImage"> <video width="900" controls>  <source src="./images/WindowPosition.mp4" type="video/mp4">  Your browser does not support the video tag. </video>';
  }
  else if (obj.id  == "sulgemisNupp") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid4.JPG"  id="infoBoxImage">';
  }
}


function changeBorder(obj){
  $(".divButton").removeClass('activeDivButton');
  $(obj).addClass('activeDivButton');
  document.getElementById("infoBox").style.visibility = "visible";
  document.getElementById("infoBox").style.border = "5px solid #ea0253";
}
