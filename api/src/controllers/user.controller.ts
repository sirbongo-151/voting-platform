import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken";

const prisma = new PrismaClient();


export const signup = async (req: Request, res: Response) => {
  try {
    const { name, idNumber, secretkey } = req.body;

    if (!name || !idNumber || !secretkey) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { idNumber },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedSecretkey = await bcrypt.hash(secretkey, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        idNumber,
        secretkey: hashedSecretkey,
      },
    });

    return res.status(201).json({
      message: "Signup successful",
      user: {
        id: newUser.id,
        name: newUser.name,
        idNumber: newUser.idNumber,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { idNumber, secretkey } = req.body;

    if (!idNumber || !secretkey) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await prisma.user.findUnique({
      where: { idNumber },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isSecretkeyValid = await bcrypt.compare(secretkey, user.secretkey);

    if (!isSecretkeyValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

   
    const accessToken = generateToken(res, user.id);

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        idNumber: user.idNumber,
      },
      accessToken,
    });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
