import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
//popups
const popOne = document.getElementById("popup-1");
const popTwo = document.getElementById("popup-2");
const popThree = document.getElementById("popup-3");


//body
const section = document.querySelector(".section");


// Load the Spline scene

//https://https://prod.spline.design/xaVhiXJs75cw9ObX/scene.splinecode    my avatar
//https://prod.spline.design/6LWfYpzEU2GFJ5ie/scene.splinecode     headphone
app
  .load("https://prod.spline.design/xaVhiXJs75cw9ObX/scene.splinecode")
  .then(() => {
    console.log("Scene Loaded");

    // show pop-1
    app.addEventListener("mouseDown", (e) => {
      if (e.target && e.target.name === "iconOne") {
        console.log("Cube clicked! 1");
        popOne.classList.remove("hide");

      
      }
    });

    // show pop-2
    app.addEventListener("mouseDown", (e) => {
      if (e.target && e.target.name === "icontwo") {
        console.log("Cube clicked! 2");
        popTwo.classList.remove("hide");

      
      }
    });

    // show pop-3
    app.addEventListener("mouseDown", (e) => {
      if (e.target && e.target.name === "iconThree") {
        console.log("Cube clicked! 3");
        popThree.classList.remove("hide");

      
      }
    });

    if (popOne) {
      popOne.addEventListener("click", () => {
          popOne.classList.add("hide");
      });
  }
  if (popTwo) {
      popTwo.addEventListener("click", () => {
          popTwo.classList.add("hide");
      });
  }
  if (popThree) {
      popThree.addEventListener("click", () => {
          popThree.classList.add("hide");
      });
  }
  


  });

