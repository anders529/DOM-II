// GTFO!!

//Prevent Default stuff
let fan = document.querySelectorAll('nav a');
fan.forEach((link)=>{
  link.addEventListener("click", (e) =>{
      e.preventDefault();
  })
})

//change image size.
const keys = document.querySelector(".intro img")
keys.addEventListener("mouseenter", (event) => {
    event.target.style.transform = "scale(2)";
    event.target.style.transistion = "transform 5s"
})
keys.addEventListener("mouseleave", () => {
    keys.style.transform = "scale(1)"
  })

//change color of h2 tags to blue.
document.querySelectorAll("h2").forEach(el => {
    el.addEventListener("click", () => {
      el.style.color= "blue";
    })
  })

// change color of p tags to purple.
  document.querySelectorAll("body").forEach(el => {
    el.addEventListener("dblclick", () => {
      el.style.color= "purple";
    })
  })
  bodyBG = document.querySelector("body");
  bodyBG.addEventListener("click", (e)=>{
    e.target.style.backgroundColor = "yellow";
})

headerBG = document.querySelector("header p");
  headerBG.addEventListener("click", (e) =>{
    e.target.style.backgroundColor = "blue";
      e.stopPropagation();
})

  // on keypressed, change text color to green
  const el = document.querySelector("body")
    el.addEventListener("keydown", () => {
      el.style.color= "green";
    })
//in key release, text color changes back to black
    el.addEventListener("keyup", () => {
      el.style.color= "black";
    })

    const boat = document.querySelector(".content-destination img")
    boat.addEventListener("mouseenter", (event) => {
    event.target.style.transform = "scale(1.5)";
    event.target.style.transistion = "transform 5s"
  })
    boat.addEventListener("mouseleave", () => {
    boat.style.transform = "scale(1)"
  })

//change color to hotpink on click
    document.querySelectorAll("h4").forEach(el => {
        el.addEventListener("click", () => {
          el.style.color= "hotpink";
        })
      })
// cahnge color to orange on double click
      document.querySelectorAll("h4").forEach(el => {
        el.addEventListener("dblclick", () => {
          el.style.color= "orange";
        })
      })