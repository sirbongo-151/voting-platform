import { Request, Response } from 'express';
import prisma from '../utils/prismaClient';
import cloudinary from '../lib/cloudinary';
import fs from 'fs';
import path from 'path';
import { File } from 'formidable';


export const createCandidate = async (req: Request, res: Response) => {
  try {
    const { name, position, categoryId } = req.body;
    const file = req.myFiles?.image as File; 
   
    if (!name || !position || !categoryId || !file) {
      return res.status(400).json({ message: "All fields are required" });
    }

   
    const result = await cloudinary.uploader.upload(file.filepath, {
      folder: "candidates", 
      public_id: `${name}-${Date.now()}`,
    });

    fs.unlinkSync(file.filepath);

    const candidate = await prisma.candidate.create({
      data: {
        name,
        position,
        categoryId,
        image: result.secure_url, 
      },
    });

    console.log("Created candidate:", candidate);
    res.status(201).json(candidate);

  } catch (error) {
    console.error("Create candidate error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};



export const getCandidatesByCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;

    if (!categoryId) {
      return res.status(400).json({ message: "Category ID is required" });
    }

    const candidates = await prisma.candidate.findMany({
      where: { categoryId },
      include: { votes: true },
    });

    const results = candidates.map((candidate) => ({
      ...candidate,
      voteCount: candidate.votes.length,
    }));

    res.json(results);
  } catch (error: any) {
    console.error("Error fetching candidates:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const getAllCandidates = async (req: Request, res: Response) => {
  try {
    const candidates = await prisma.candidate.findMany();
    res.json(candidates);
  } catch (error: any) {
    console.error("Error fetching candidates:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};