let toggler = document.getElementById("switch");

// toggler.addEventListener("click", () => {
//   if (toggler.checked == true) {
//     document.body.style.backgroundColor = "black";
//   } else {
//     document.body.style.backgroundColor = "white";
//   }
// });

// ternary method
toggler.addEventListener("click", () => {
  toggler.checked
    ? (document.body.style.backgroundColor = "black")
    : (document.body.style.backgroundColor = "white");
});
