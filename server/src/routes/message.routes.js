import express from "express";
import { deleteMessage, getMessages, sendMessage } from "../controllers/message.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const messageRouter = express.Router();

messageRouter.get("/:conversationId", authMiddleware, getMessages);
messageRouter.post("/", authMiddleware, sendMessage);
messageRouter.delete("/:messageId", authMiddleware, deleteMessage);

export default messageRouter;