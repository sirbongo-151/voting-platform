import {  PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const checkDB = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database");
    }
};