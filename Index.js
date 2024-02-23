function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  if (cityName === "London") {
    document.getElementById("btn").style.color = "#ccff8b";
    document.getElementById("btn").style.borderBottom = "2px solid #ccff8b";
    document.getElementById("BTN").style.color = "#b8b9bb";
    document.getElementById("BTN").style.borderBottom = "none";
  } else {
    document.getElementById("BTN").style.color = "#ccff8b";
    document.getElementById("BTN").style.borderBottom = "2px solid #ccff8b";
    document.getElementById("btn").style.color = "#b8b9bb";
    document.getElementById("btn").style.borderBottom = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const togglerButton = document.querySelector(".navbar-toggler");
  const crossIcon = document.querySelector(".navbar-toggler-cross");
  const barIcon = document.querySelector(".navbar-toggler-icon");
  
  const dropdown = document.querySelector(".navbar-collapse");
  document.addEventListener("click", function () {
    dropdown.classList.remove("show");
    console.log("Click1");
    if(crossIcon.style.display === "inline-block")
    crossIcon.style.display = "none";
      barIcon.style.display =
       "inline-block" ;
  });
  togglerButton.addEventListener("click", function (event) {
    console.log("Click2");
    crossIcon.style.display =
      crossIcon.style.display === "none" ? "inline-block" : "none";
    barIcon.style.display =
    barIcon.style.display === "none" ? "inline-block" : "none";
    event.stopPropagation();
  });


});

