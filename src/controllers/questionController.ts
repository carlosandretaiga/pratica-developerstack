import { Request, Response } from 'express';

import questionService, { CreateQuestion } from '../services/questionService.js';


export async function createQuestion(req: Request, res: Response) {
  const question: CreateQuestion = req.body;
  await questionService.insertQuestion(question);

  res.sendStatus(201);

}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.findAll();
}

export async function getById(req: Request, res: Response) {
  // TODO
}
