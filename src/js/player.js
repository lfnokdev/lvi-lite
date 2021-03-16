var btn = document.getElementById("headerBtn");
var modal = "https://www.youtube.com/embed/rw_KGvQTcbw";
var eBtn = document.getElementById('emailBtn');
var mail = 'mailto:laviedinterieur@gmail.com?subject= En savoir +';
var pBtn = document.getElementById('phoneBtn');
var phone = 'tel:+33650108400';

function addModal(event){
  document.getElementById("mediaPlayer").src = modal;
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "src/js/modal.js";
  document.getElementsByTagName("head")[0].appendChild(script);
  event.preventDefault();
}
btn.addEventListener("click", addModal);

//mailto
function emailTo(event){
  eBtn.onclick = window.location.href= mail;
}
eBtn.addEventListener("click", emailTo);

//phoneto
function phoneTo(event){
  pBtn.onclick = window.location.href = phone;
}
pBtn.addEventListener("click", phoneTo);
