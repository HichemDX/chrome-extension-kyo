let response = "check your conection";
let credentials = {};
fetch("http://localhost:5000/get_credentials")
  .then((res) => res.text())
  .then((data) => {
    data = JSON.parse(data);
    credentials = data;
    console.log(credentials);
  });

// window.onhashchange = function () {
//   if (
//     /^https:\/\/mail\.google\.com\/mail\/u\/0\/#inbox\/.+/.test(document.URL)
//   ) {
//     var subject = document.querySelector(".hP").innerText;
//     var body = document.querySelector(".ii.gt").innerText;
//     //get the name from local storage
//     let Prompt = "";
//     if (credentials.name == "") {
//       Prompt =
//         'write a response to the fellowing email: " ' +
//         body +
//         ' " which is the subject: "' +
//         subject +
//         '"';
//     } else {
//       Prompt =
//         'write a response to the fellowing email: " ' +
//         body +
//         ' " which is the subject: "' +
//         subject +
//         '" replace your name by "' +
//         credentials.name +
//         '" in the" ' +
//         credentials.slctVal +
//         '" language';
//     }
//     console.log(Prompt);
//     function getres() {
//       fetch("http://localhost:5000/get_response", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ prompt: Prompt }),
//       })
//         .then((res) => res.text())
//         .then((data) => {
//           data = JSON.parse(data);

//           response = data.content;
//           console.log(response);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//     getres();

//     var responseButton = document.getElementsByClassName("ams bkH")[0];
//     if (responseButton != null) {
//       responseButton.addEventListener("click", function () {
//         const style = document.createElement("style");
//         style.innerHTML = `
//         .popeup {
//           background-color: #EEEEEE;
//           height: 504px;
//           width: 876px;
//           margin-top: 4%;
//           border-radius: 10px;

//           justify-content: center;
//           padding-top: 50px;
//         }

//         .popeuxp2 {
//           background-color: #13212B;
//           height: 402px;
//           width: 830px;
//           border-radius: 10px;

//         }

//         .reload {
//           position: relative;
//           right: -350px;
//           top: 50px;
//         }

//         .star {
//           position: relative;
//           right: -350px;
//           top: 50px;
//         }

//         .send11 {
//           position: relative;
//           right: 220px;
//           top: 30px;
//         }

//         .sendx {
//           position: relative;
//           right: -230px;
//           top: 30px;
//         }

//         .hichem {
//           display: none;
//         }

//         .popeup {
//           background-color: #EEEEEE;
//           height: 504px;
//           width: 876px;
//           margin-top: 4%;
//           border-radius: 10px;

//           justify-content: center;
//           padding-top: 50px;
//         }

//         .popeuxp2 {
//           background-color: #13212B;
//           height: 402px;
//           width: 830px;
//           border-radius: 10px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;

//         }

//         .par {
//           color: white;
//           background: transparent;
//           border: none;
//           outline: none;
//           width: 90%;
//           height: 70%;
//           font-size: 16px;
//           line-height: 25px;

//         }

//         .bu-send {
//           width: 200px;
//           height: 50px;
//           border-radius: 30px;
//           color: white;
//           background: #E50043;
//           border: none;
//           margin-top: 20px;
//           cursor: pointer;
//           margin-right: 35%;

//         }

//         .bu-new {
//           width: 50px;
//           height: 50px;
//           border-radius: 50%;
//           color: white;
//           background: #E50043;
//           border: none;
//           margin-top: 10px;
//           margin-right: -80%;
//           cursor: pointer;

//         }
//         .dropbtn {
//         background-color: #13212B;
//         color: white;
//         width: 300px;
//         border-radius: 6px;
//         padding: 16px;
//         font-size: 16px;
//         border: none;
//         cursor: pointer;
//       }

//       .dropbtn:hover, .dropbtn:focus {
//         background-color: #263642;
//       }

//       .dropdown {
//         position: relative;
//         display: inline-block;
//       }

//       .dropdown-content {
//         display: none;
//         position: absolute;
//         background-color: #f1f1f1;
//         width: 300px;
//         overflow: auto;
//         box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
//         z-index: 1;
//       }

//       .dropdown-content a {
//         color: black;
//         padding: 12px 16px;
//         text-decoration: none;
//         display: block;
//       }
//       .par::-webkit-scrollbar {
//         display: none;
//       }
//       .dropdown a:hover {background-color: #ddd;}

//       .show {display: block;}
//         `;

//         const element = document.createElement("div");
//         element.innerHTML = `
//         <center>
//       <div class="popeup">

//         <div class="popeuxp2">

//           <textarea class="par">

//           </textarea>
//           <button class="bu-new">New</button>
//         </div>

//         <button class="bu-send">Send</button>
//         <div class="dropdown">
//           <button onclick="myFunction()" class="dropbtn">Dropdown</button>
//           <div id="myDropdown" class="dropdown-content">
//             <a class="Neutral">Neutral</a>
//             <a class="Negative">Negative</a>
//             <a class="Positive">Positive</a>
//           </div>
//         </div>
//       </div>

//     </center>`;

//         element.style =
//           "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);";
//         document.querySelector("body").appendChild(style);
//         document.querySelector("body").appendChild(element);

//         fetch("http://localhost:5000/set_popup"),
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ page: "page2" }),
//           };
//         setTimeout(function () {
//           var responseArea = document.querySelector(".par");
//           var reload = document.querySelector(".bu-new");
//           if (responseArea) {
//             responseArea.innerHTML = response;
//             reload.addEventListener("click", function () {
//               const rel = response;

//               function getresSe() {
//                 Prompt = Prompt + "generate another one";
//                 fetch("http://localhost:5000/get_response", {
//                   method: "POST",
//                   headers: {
//                     "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify({ prompt: Prompt }),
//                 })
//                   .then((res) => res.text())
//                   .then((data) => {
//                     data = JSON.parse(data);

//                     response = data.content;
//                     console.log(response);
//                   })
//                   .catch((err) => {
//                     console.log(err);
//                   });
//               }
//               let wah = "check your conection";

//               getresSe();
//               setTimeout(function () {
//                 responseArea.innerHTML = response;
//               }, 8000);
//             });
//           } else {
//             console.log("Response area not found");
//           }
//         }, 8000);
//       });
//     }
//   }
// };

window.onhashchange = async function () {
  if (
    /^https:\/\/mail\.google\.com\/mail\/u\/0\/#inbox\/.+/.test(document.URL)
  ) {
    var subject = document.querySelector(".hP").innerText;
    var body = document.querySelector(".ii.gt").innerText;
    //get the name from local storage
    let Prompt = "";
    if (credentials.name == "") {
      Prompt =
        'write a response to the fellowing email: " ' +
        body +
        ' " which is the subject: "' +
        subject +
        '"';
    } else {
      Prompt =
        'write a response to the fellowing email: " ' +
        body +
        ' " which is the subject: "' +
        subject +
        '" replace your name by "' +
        credentials.name +
        '" in the" ' +
        credentials.slctVal +
        '" language';
    }
    let responseType = "Neutral";
    var responseButton = document.getElementsByClassName("ams bkH")[0];
    if (responseButton != null) {
      responseButton.addEventListener("click", async function () {
        const style = document.createElement("style");
        style.innerHTML = `
        .popeup {
          background-color: #EEEEEE;
          height: 504px;
          width: 876px;
          margin-top: 4%;
          border-radius: 10px;
      
          position: relative;
      
          justify-content: center;
          padding-top: 50px;
        }
      
        .popeuxp2 {
          background-color: #13212B;
          margin-top: 20px;
          height: 402px;
          width: 830px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      
      
        }
      
      
      
        .reload {
          position: relative;
          right: -350px;
          top: 50px;
        }
      
        .star {
          position: relative;
          right: -350px;
          top: 50px;
        }
      
        .send11 {
          position: relative;
          right: 220px;
          top: 30px;
        }
      
        .sendx {
          position: relative;
          right: -230px;
          top: 30px;
        }
      
        .hichem {
          display: none;
        }
      
        .popeup {
          background-color: #EEEEEE;
          height: 504px;
          width: 876px;
          margin-top: 4%;
          border-radius: 10px;
      
      
          justify-content: center;
          padding-top: 50px;
        }
      
        .popeuxp2 {
          background-color: #13212B;
          height: 402px;
          width: 830px;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      
      
        }
      
        .par {
          color: white;
          background: transparent;
          border: none;
          outline: none;
          width: 90%;
          height: 70%;
          font-size: 16px;
          line-height: 25px;
      
      
        }
      
        .bu-send {
          width: 200px;
          height: 50px;
          border-radius: 30px;
          color: white;
          background: #E50043;
          border: none;
          margin-top: 20px;
          cursor: pointer;
          margin-right: 35%;
      
      
        }
      
        .bu-new {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: white;
          background: #E50043;
          border: none;
          margin-top: 10px;
          margin-right: -80%;
          cursor: pointer;
          display:grid;
          place-content:center;
      
        }
        .dropbtn {
        background-color: #13212B;
        color: white;
        width: 300px;
        border-radius: 6px;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
      }
      
      .dropbtn:hover, .dropbtn:focus {
        background-color: #263642;
      }
      
      .dropdown {
        position: relative;
        display: inline-block;
      }
      
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        width: 300px;
        overflow: auto;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }
      
      .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }
      .par::-webkit-scrollbar {
        display: none;
      }
      .dropdown a:hover {background-color: #ddd;}
      
      .show {display: block;}     

      .lds-ring {
        width: 32px;
        height: 32px;
      }
      .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 32px;
        height: 32px;
        border: 4px solid #fff;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fff transparent transparent transparent;
      }
      .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
      }
      .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
      }
      .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
      }
      @keyframes lds-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      .closediv {
        position: absolute;
        top: 10px;
        right: 20px;
        width: 50px;
        background: #E50043;
        border-radius: 50%;
        cursor: pointer;
        display:grid;
        place-content:center;
      }
    
      .close {
        font-size: 40px;
        color: white;
      }
        `;

        const element = document.createElement("div");
        element.innerHTML = `
        <center>
      <div class="popeup">

          <div class="closediv">
          <span class="close">&times;</span>
        </div>
        <div class="popeuxp2">


          <textarea class="par">

          </textarea>
          <button class="bu-new">New</button>
        </div>

        <button class="bu-send">Send</button>
        <div class="dropdown">
          <select class="dropbtn">
              <option selected>Type of response</option>
              <option value="Neutral">Neutral</option>
              <option value="Negative">Negative</option>
              <option value="Positive">Positive</option>
          </select>
        </div>
      </div>

    </center>`;

        element.style =
          "z-index:555;width:100vw;height:100%;display:grid;place-content:center;background:rgba(0,0,0,0.5);position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);";
        document.querySelector("body").appendChild(style);
        document.querySelector("body").appendChild(element);

        var responseArea = document.querySelector(".par");
        var reload = document.querySelector(".bu-new");
        var send = document.querySelector(".bu-send");
        var close = document.querySelector(".closediv");
        close.addEventListener("click", function () {
          document.querySelector("body").removeChild(element);
        });

        document
          .querySelector("select.dropbtn")
          .addEventListener("change", (e) => {
            responseType = e.target.value;
          });
        console.log(Prompt);
        async function getres() {
          const res = await fetch("http://localhost:5000/get_response", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: `${Prompt} in ${responseType} way`,
            }),
          });
          return res.json();
        }

        if (responseArea) {
          responseArea.innerHTML = (await getres()).content;
          send.addEventListener("click", function () {
            document.querySelector(".Am.Al.editable.LW-avf").innerHTML =
              document.querySelector(".par").innerHTML;
            document
              .getElementById(
                document
                  .querySelector(".T-I.J-J5-Ji.aoO.v7.T-I-atl.L3.mt-send")
                  .getAttribute("id")
              )
              .click();
            document.querySelector("body").removeChild(element);
          });

          reload.addEventListener("click", async function () {
            reload.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
            reload.setAttribute("disabled", "true");
            const rel = responseArea.innerHTML;
            async function getresSe() {
              Prompt = Prompt + "generate another one";
              const res = await fetch("http://localhost:5000/get_response", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  prompt: `${Prompt} in ${responseType} way`,
                }),
              });
              return res.json();
            }
            let wah = "check your conection";

            responseArea.innerHTML = (await getresSe()).content;

            reload.innerHTML = `New`;
            reload.removeAttribute("disabled");
          });
        } else {
          console.log("Response area not found");
        }
      });
    }
  }
};
