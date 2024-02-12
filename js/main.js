function menu() {
  var menu = document.getElementById("menu");
  var close = document.getElementById("close");
  var open = document.getElementById("open");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
    close.style.display = "none";
    open.style.display = "flex";


  } else {
    menu.style.display = "flex";
    close.style.display = "flex";
    open.style.display = "none";
  }
}