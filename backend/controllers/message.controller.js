import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";

export const getMessages = async (req,res) => {
  try {
    const {id : userToChatId } = req.params;
    const senderId = req.user._id; // we could use req.user.id cause we have protectRoute middleware

    const conversation = await Conversation.findOne({
      partecipants : { $all : [senderId, userToChatId]}
    }).populate("messages")

    if(!conversation) {
      return res.status(200).json([])
    }

    res.status(200).json(conversation.messages)


  } catch (error) {
    console.log('Error in get Message controller',error.message);
    res.status(500).json({
      error: `Internal Server Error : ${error.message}`,
    })
  }
}


export const sendMessage = async (req,res) => {
  try {
    const {message} = req.body;
    const {id : receiverId} = req.params;
    const senderId = req.user._id;

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

    res.status(201).json({message : `${newMessage.message}`})
    

  } catch (error) {
    console.log('Error in Send Message controller',error.message);
    res.status(500).json({
      error: `Internal Server Error : ${error.message}`,
    })
  }
}