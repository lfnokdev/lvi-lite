var btn = document.getElementById("headerBtn");
var modal = "https://www.youtube.com/embed/rw_KGvQTcbw";

function addModal(event){
  document.getElementById("mediaPlayer").src = modal;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "src/js/modal.js.";
  document.getElementsByTagName("head")[0].appendChild(script);
  event.preventDefault();
}
btn.addEventListener("click", addModal);
