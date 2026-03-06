export const serveQuestions = (context) => {
  const quiz = context.get("quiz");
  const { question, options, questionNo } = quiz.getCurrentQuestion();

  return context.json({ question, options, questionNo });
}

export const submitResponse = async (context) => {
  const quiz = context.get("quiz");
  const res = await context.req.text();
  quiz.postResponse(res);
  quiz.next();
  // console.log(quiz.getResponses());
  const { question, options, questionNo } = quiz.getCurrentQuestion();

  return context.json({ question, options, questionNo });
}