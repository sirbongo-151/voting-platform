import { Request, Response } from 'express';
import prisma from '../utils/prismaClient';

export const castVote = async (req: Request, res: Response) => {
  try {
    const { candidateId, userId, categoryId } = req.body;
    console.log("Request body:", req.body);


    // Validate required fields
    if (!candidateId || !userId || !categoryId) {
      return res.status(400).json({ message: "All fields (candidateId, userId, categoryId) are required." });
    }

    // Check if user already voted in this category
    const existingVote = await prisma.vote.findFirst({
      where: { userId, categoryId },
    });

    if (existingVote) {
      return res.status(400).json({ message: "You've already voted in this category" });
    }

    // Create vote
    const vote = await prisma.vote.create({
      data: { candidateId, userId, categoryId },
    });

    if (res.status(201)) {
      await prisma.user.update({
        where: { id: userId },
        data: { isVoted: true},
      })
    }else{
      return res.status(500).json({ message: "Something went wrong try again" });
    }
    
    return res.status(201).json({ message: "Vote successfully cast", vote });

  } catch (error) {
    console.error("Error casting vote:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
