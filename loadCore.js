async function loadPlayer() {
  const pond = FilePond.create(document.getElementById("input"));

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


  // OLD FUNCTION
  //
  // document.querySelector("input").onchange = function () {
  //   document
  //     .querySelector("desmond-player")
  //     .loadURL(
  //       URL.createObjectURL(document.querySelector("input").files[0]),
  //       function () {
  //         if (document.querySelector("input[type='checkbox']").checked) {
  //           document.querySelector("desmond-player").enableMicrophone();
  //         }
  //         document.querySelector("input[type='checkbox']").onchange =
  //           function () {
  //             if (document.querySelector("input[type='checkbox']").checked) {
  //               document.querySelector("desmond-player").enableMicrophone();
  //             }
  //           };
  //       }
  //     );
  // };
}

loadPlayer();
