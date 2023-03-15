let response = "check your conection";
let credentials = {};
setTimeout(function () {
fetch("http://localhost:5000/get_credentials")
  .then((res) => res.text())
  .then((data) => {
    data = JSON.parse(data);
    credentials = data;
    console.log(credentials);
  })}, 1000);
window.onhashchange = function () {
  if (
    /^https:\/\/mail\.google\.com\/mail\/u\/0\/#inbox\/.+/.test(document.URL)
  ) {
    var subject = document.querySelector(".hP").innerText;
    var body = document.querySelector(".ii.gt").innerText;
    //get the name from local storage
    let Prompt = ''
    if(credentials.name == '' ){
      Prompt =
      'write a response to the fellowing email: " ' +
      body +
      ' " which is the subject: "' +
      subject +
      '"';
    }else{
      Prompt= 
      'write a response to the fellowing email: " ' +
      body +
      ' " which is the subject: "' +
      subject +
      '" sent by "' + credentials.name + '" in the" '+ credentials.slctVal + '" language';
    }
    console.log(prompt);
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
