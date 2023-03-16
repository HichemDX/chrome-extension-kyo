const inp = document.querySelector("input");
const btn = document.querySelector("button");
const slct = document.querySelector("select");
const nameI = document.querySelector(".name");
const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");
const settigns = document.querySelector(".settings");

//check if the name in local storage is set
settigns.addEventListener("click", () => {
  page1.style.display = "flex";
  page1.style.flexDirection = "column";
  page2.style.display = "none";
  inp.value = localStorage.getItem("name");
  slct.value = localStorage.getItem("slctVal");
});

if (localStorage.getItem("name")) {
  page2.style.display = "flex";
  page2.style.flexDirection = "column";
  page1.style.display = "none";
  nameI.innerHTML = localStorage.getItem("name");
  object = {
    name: localStorage.getItem("name"),
    slctVal: localStorage.getItem("slctVal"),
  };
  fetch("http://localhost:5000/send_credentials", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
}
//get the value of the input
btn.addEventListener("click", () => {
  const val = inp.value;
  const slctVal = slct.value;
  //send the value to the background script
  console.log(val, slctVal);
  localStorage.setItem("name", val);
  localStorage.setItem("slctVal", slctVal);
  //close the popup
  if (localStorage.getItem("name")) {
    page2.style.display = "flex";
    page2.style.flexDirection = "column";
    page1.style.display = "none";
    nameI.innerHTML = localStorage.getItem("name");
    object = {
      name: localStorage.getItem("name"),
      slctVal: localStorage.getItem("slctVal"),
    };
    console.log(object);
    fetch("http://localhost:5000/send_credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });
  } else {
    //add a message under the input that says "please enter a name"
  }
});
