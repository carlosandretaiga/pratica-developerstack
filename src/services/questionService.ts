// TODO
import { questions } from "@prisma/client";
import questionRepository from "../repositories/questionRepository.js";

export type CreateQuestion = Omit<questions, "id">;

async function insertQuestion(CreateQuestion: CreateQuestion) {
  await questionRepository.insert(CreateQuestion);
}

async function findAll() {
  return questionRepository.findAll();
}


const  questionService = {
  insertQuestion,
  findAll,
}

export default questionService;