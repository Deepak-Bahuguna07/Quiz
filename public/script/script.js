const main = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (dets) => {
    dets.preventDefault();
    console.log("hello");
    console.log(dets);
  })
}

globalThis.onload = main;