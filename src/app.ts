import * as dotenv from "dotenv";
import express from "express";
import prisma from "../prisma/client";
import cors from "cors";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await prisma.post.findMany();

    res.json(posts);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
