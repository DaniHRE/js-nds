async function loadPlayer() {
  player = document.getElementById("player");
  shadow = player.shadowRoot;

  const pond = FilePond.create(shadow.querySelector('input[type="file"]'));

  pond.on("addfile", (error, file) => {
    if (error) {
      console.log("Oh no");
      return;
    }

    console.log("File added", file);

    document
      .querySelector("desmond-player")
      .loadURL(URL.createObjectURL(file.file));
  });

  pond.on("removefile", (error) => {
    if (error) {
      console.log("Oh no");
      return;
    }

    console.log("File removed");
    
  });
  
}

loadPlayer();
