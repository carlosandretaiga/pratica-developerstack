import { prisma } from "./../config/database.js";
import { CreateQuestion } from "../services/questionService.js";


async function insert(CreateQuestion: CreateQuestion) {
  await prisma.questions.create({
    data: CreateQuestion
  });
}

async function findAll() {
  return prisma.questions.findMany();
}

export default {
  insert,
  findAll,
}
