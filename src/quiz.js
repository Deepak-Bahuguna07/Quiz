export class Quiz {
  #current
  #response
  #questions

  constructor(questions) {
    this.#current = 0;
    this.#questions = questions;
    this.response = [];
  }

  current() {
    return this.#current;
  }

  next() {
    this.#current += 1;
  }

  response(res) {
    this.#response.push(res);
  }
}