let response = "yes";
window.onhashchange = function () {
  if (
    /^https:\/\/mail\.google\.com\/mail\/u\/0\/#inbox\/.+/.test(document.URL)
  ) {
    var subject = document.querySelector(".hP").innerText;
    var body = document.querySelector(".ii.gt").innerText;
    //get the name from local storage
    const Prompt =
      'write a response to the fellowing email: " ' +
      body +
      ' " which is the subject: "' +
      subject +
      '"';
    function getres() {
      fetch("http://localhost:5000/get_response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: Prompt }),
      })
        .then((res) => res.text())
        .then((data) => {
          data = JSON.parse(data);

          response = data.content;
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getres();

    var responseButton = document.getElementsByClassName("ams bkH")[0];
    if (responseButton != null) {
      responseButton.addEventListener("click", function () {
        setTimeout(function () {
          var responseArea = document.querySelector(".Am.Al.editable.LW-avf");
          if (responseArea) {
            responseArea.innerHTML = response;
          } else {
            console.log("Response area not found");
          }
        }, 8000);
      });
    }
  }
};
