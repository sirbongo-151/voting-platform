import { RequestHandler } from "express";
import formidable, { File, Files } from "formidable";

// Extend Express Request safely
declare global {
  namespace Express {
    interface Request {
      myFiles?: { [key: string]: File | File[] };
    }
  }
}

const fileParser: RequestHandler = async (req, res, next) => {
  const form = formidable({ multiples: true });

  try {
    const [fields, files]: [any, Files] = await form.parse(req);

    if (!req.body) req.body = {};
    req.myFiles = {};

    
    for (const key in fields) {
      const value = fields[key];
      req.body[key] = Array.isArray(value) ? value[0] : value;
    }

   
    for (const key in files) {
      const value = files[key];
      if (value !== undefined) {
        req.myFiles[key] = value.length > 1 ? value : value[0]; 
      }
    }

    next();
  } catch (err) {
    console.error("Form parsing error:", err);
    res.status(400).json({ message: "Invalid form data", error: err });
  }
};

export default fileParser;
