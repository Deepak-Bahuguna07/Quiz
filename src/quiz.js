export class Quiz {
  #current
  #response
  #questions

  constructor(questions) {
    this.#current = 0;
    this.#questions = questions;
    this.#response = [];
  }

  getCurrentQuestion() {
    return this.#questions[this.#current];
  }

  next() {
    this.#current += 1;
  }

  postResponse(res) {
    this.#response.push(res);
  }

  getResponses() {
    return this.#response;
  }
}