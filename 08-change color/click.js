const divs = document.querySelectorAll(".clicker");

divs.forEach((singleDiv) => {
  singleDiv.addEventListener("click", (event) => {
    let rgb = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
    singleDiv.style.backgroundColor = rgb;
    event.target.innerHTML = rgb;
  });
});
