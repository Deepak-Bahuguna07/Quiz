import { questions } from "./question-bank/questions.js";
import { createApp } from "./src/app.js";
import { Quiz } from "./src/quiz.js";

const main = () => {
  const quiz = new Quiz(questions);
  const app = createApp(quiz);
  Deno.serve({ port: 8000 }, app.fetch);
};

main();