import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const usersController = () => {
  return {
    async register(req, res) {
      const { name, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      try {
        const user = await prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
          },
        });
        res.status(200).json({
          message: "User created successfully",
          user,
        });
      } catch (error) {
        res.status(500).json({
          message: "Something went wrong",
          error,
        });
      }
    },

    async login(req, res) {
      const { email, password } = req.body;
      try {
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) {
          return res.status(404).json({
            message: "User not found",
          });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).json({
            message: "Invalid password",
          });
        }
        res.status(200).json({
          message: "User logged in successfully",
          user,
        });
      } catch (error) {
        res.status(500).json({
          message: "Something went wrong",
          error,
        });
      }
    },
  };
};

export default usersController;
