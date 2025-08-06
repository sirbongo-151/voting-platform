import { Request, Response } from 'express';
import prisma from '../utils/prismaClient';

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const category = await prisma.category.create({ data: { name } });
    res.status(201).json(category);
    
  } catch (error) {
    res.status(500).json({ message: "Something went wrong try again" });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
    
  } catch (error) {
    res.status(500).json({ message: "Cannot get categories try again" });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const category = await prisma.category.update({
      where: { id },
      data: { name },
    });
    res.json(category);
    
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}; 

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await prisma.category.delete({
      where: { id },
    });
    res.json(category);
    
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
