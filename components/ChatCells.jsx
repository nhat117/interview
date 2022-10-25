import React from "react";

const ChatCells = (props) => {
	const message = props.message;
    if(message.sender === 'A') {
		return (
			<div className='chat-message chat'>
				<div className='chat-message-user'>{message.sender}</div>
				<div className='chat-message-time'>{message.timestamp}</div>
				<div className='chat-message-text'>{message.content}</div>
			</div>
		);
	} else {
		return (
			<div className='chat-message-client chat'>
				<div className='chat-message-user'>{message.sender}</div>
				<div className='chat-message-time'>{message.timestamp}</div>
				<div className='chat-message-text'>{message.content}</div>
			</div>
		);
	}
};

export default ChatCells;
