async function loadPlayer() {
  document.querySelector("input").onchange = function () {
    document
      .querySelector("desmond-player")
      .loadURL(
        URL.createObjectURL(document.querySelector("input").files[0]),
        function () {
          if (document.querySelector("input[type='checkbox']").checked) {
            document.querySelector("desmond-player").enableMicrophone();
          }
          document.querySelector("input[type='checkbox']").onchange =
            function () {
              if (document.querySelector("input[type='checkbox']").checked) {
                document.querySelector("desmond-player").enableMicrophone();
              }
            };
        }
      );
  };
}

loadPlayer();
