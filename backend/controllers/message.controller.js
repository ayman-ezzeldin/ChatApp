import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

export const sendMessage = async (req,res) => {
  try {
    const {message} = req.body;
    const {id : receiverId} = req.params;
    const senderId = req.user._id;

    console.log(message);

    let conversation = await Conversation.findOne({
      partecipants : { $all : [senderId, receiverId]}
    })

    if(!conversation) {
      conversation = await Conversation.create({
        partecipants : [senderId, receiverId]
      })
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message
    })

    if(newMessage) {
      conversation.messages.push(newMessage._id);
    }

    // SOKET IO FUNCTIONALITY WILL BE HERE

    // await conversation.save(); ||  // this will save the conversation then save the message
    // await newMessage.save();   ||  // so if conversation take 1s to save then message will take 1s delay.

    await Promise.all([conversation.save(), newMessage.save()]) // will run them as parallel

    res.status(201).json({message : `${newMessage.message} sent successfully`})
    

  } catch (error) {
    console.log('Error in Send Message controller',error.message);
    res.status(500).json({
      error: `Internal Server Error : ${error.message}`,
    })
  }
}