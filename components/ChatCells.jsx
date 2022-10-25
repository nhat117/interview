import React from "react";
import StyledChatCells from "./StyledChatCells";
const ChatCells = (props) => {
	const message = props.message;
    if(message.sender === 'A') {
		return (
			<StyledChatCells className='chat-message chat'>
				<StyledChatCells className='chat-message-user'>{message.sender}</StyledChatCells>
				<StyledChatCells className='chat-message-time'>{message.timestamp}</StyledChatCells>
				<StyledChatCells className='chat-message-text'>{message.content}</StyledChatCells>
			</StyledChatCells>
		);
	} else {
		return (
			<StyledChatCells className='chat-message-client chat'>
				<StyledChatCells className='chat-message-user'>{message.sender}</StyledChatCells>
				<StyledChatCells className='chat-message-time'>{message.timestamp}</StyledChatCells>
				<StyledChatCells className='chat-message-text'>{message.content}</StyledChatCells>
			</StyledChatCells>
		);
	}
};

export default ChatCells;
