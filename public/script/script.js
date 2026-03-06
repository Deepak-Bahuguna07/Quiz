import { generateForm } from "./generateHtml.js";

const submitResponse = async (res) =>
  await fetch("/response", { method: "post", body: res })

const main = async () => {
  const container = document.querySelector("#container");
  const data = await fetch("/question");
  const question = await data.json();
  const html = generateForm(question);
  container.appendChild(html);

  const form = document.querySelector("form");
  form.addEventListener("submit", async (dets) => {
    dets.preventDefault();
    const fd = new FormData(form);
    const c = [...fd.entries()];
    const data = await submitResponse(c[0][1]);

    const nextQuestion = await data.json();
    const html = generateForm(nextQuestion);
    container.innerHTML = '';
    container.appendChild(html);
  })
}

globalThis.onload = main;