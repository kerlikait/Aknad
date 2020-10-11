window.onload = function () {
  document.getElementById("infoBox").style.visibility = "visible";
  document.getElementById("infoBox").style.border = "5px solid #ea0253";
  document.getElementById("infoBox").innerHTML = '<img src="./images/Slaid1.JPG"  id="infoBoxImage">';
}


function info(obj) {

  if ( obj.id  == "minimeerimisNupp") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Minimize.png"  id="infoBoxImage">' +
    '<video width="900" controls>  <source src="./images/Minimize.mp4" type="video/mp4">  Your browser does not support the video tag. </video>' +
    '<img src="./images/MinimizeAll.png"  id="infoBoxImage">' +
    '<video width="900" controls>  <source src="./images/Desktop.mp4" type="video/mp4">  Your browser does not support the video tag. </video>' +
    '<img src="./images/RaputusText.png"  id="infoBoxImage">' +
    '<video width="900" controls>  <source src="./images/Shake.mp4" type="video/mp4">  Your browser does not support the video tag. </video>';
  }
  else if (obj.id  == "suurendamis/vähendamisNupp") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/KeskmineNupp.png"  id="infoBoxImage"> ' +
    '<img width="600" src="./images/SmallWindow.png"  id="infoBoxImage">' +
    '<video width="900" controls>  <source src="./images/Resize.mp4" type="video/mp4">  Your browser does not support the video tag. </video>' +
    '<img width="500" src="./images/WinKeys.JPG"  id="infoBoxImage">' +
    '<video width="900" controls>  <source src="./images/WindowPosition.mp4" type="video/mp4">  Your browser does not support the video tag. </video>';
  }
  else if (obj.id  == "sulgemisNupp") {
    changeBorder(obj);
    document.getElementById("infoBox").innerHTML = '<img src="./images/Close.png"  id="infoBoxImage">' +
    '<video width="900" controls>  <source src="./images/Close.mp4" type="video/mp4">  Your browser does not support the video tag. </video>';
  }
}


function changeBorder(obj){
  $(".divButton").removeClass('activeDivButton');
  $(obj).addClass('activeDivButton');
  document.getElementById("infoBox").style.visibility = "visible";
  document.getElementById("infoBox").style.border = "5px solid #ea0253";
}
