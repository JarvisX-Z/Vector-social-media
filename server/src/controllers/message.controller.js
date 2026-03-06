import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import Notification from "../models/notification.model.js";

export const getMessages = async (req, res) => {
  try {

    const messages = await Message.find({
      conversation: req.params.conversationId,
    })
      .populate("sender", "username name avatar")
      .sort({ createdAt: 1 });

    res.json(messages);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { conversationId, content } = req.body;
    const message = await Message.create({
      conversation: conversationId,
      sender: req.user._id,
      content,
    });
    const populated = await message.populate(
      "sender",
      "username name avatar"
    );
    const conversation = await Conversation.findById(conversationId);
    const receiverId = conversation.participants.find(
      (id) => id.toString() !== req.user._id.toString()
    );
    if (receiverId.toString() !== req.user._id.toString()) {
      await Notification.create({
        recipient: receiverId,
        sender: req.user._id,
        type: "message",
      });
    }
    res.json(populated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};