async function loadPlayerStyle() {
  player = document.getElementById("player");

  content = await fetch("./assets/css/player.css");
  res = await content.text();

  var style = document.createElement("style");
  style.innerHTML = res;
  player.shadowRoot.appendChild(style);

}

loadPlayerStyle()
