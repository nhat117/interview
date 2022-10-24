import React from "react";

const ChatCells = (props) => {
	const message = props.message;
    
	return (
		<div className='chat-message'>
			<div className='chat-message-user'>{message.sender}</div>
			<div className='chat-message-time'>{message.timestamp}</div>
			<div className='chat-message-text'>{message.content}</div>
		</div>
	);
};

export default ChatCells;
