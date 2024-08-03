async function loadPlayerStyle() {
  player = document.getElementById("player");

  content = await fetch("./assets/css/player.css");
  res = await content.text();

  var style = document.createElement("style");
  style.innerHTML = res;
  player.shadowRoot.appendChild(style);

  contentStyle = await fetch("./assets/css/file.css");
  resStyle = await contentStyle.text();

  var contentFileStyle = document.createElement("style");
  contentFileStyle.innerHTML = resStyle;
  player.shadowRoot.appendChild(contentFileStyle);

  contentFile = await fetch("./plugins/filepond/filepond.css");
  resFile = await contentFile.text();

  var styleFile = document.createElement("style");
  styleFile.innerHTML = resFile;
  player.shadowRoot.appendChild(styleFile);

}

loadPlayerStyle()
