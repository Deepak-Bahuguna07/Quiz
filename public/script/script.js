import { generateForm } from "./generateHtml.js";

const fetchData = () => ({
  question: "who is the captain of indian cricket team?",
  options: ["sky", "mahi", "virat", "hardik"],
  questionNo: 1,
})


const main = () => {
  const container = document.querySelector("#container");
  const question = fetchData();
  const data = generateForm(question);
  console.log(data)
  container.appendChild(data);

  const form = document.querySelector("form");
  form.addEventListener("submit", (dets) => {
    dets.preventDefault();
    console.log("hello");
    console.log(dets);
  })
}

globalThis.onload = main;