import React from "react";
import StyledChatCellsDiv from "./StyledChatCellsDiv";
const ChatCells = (props) => {
	const message = props.message;
	if (message.sender === "A") {
		return (
			<StyledChatCellsDiv className='chat-message chat'>
				<StyledChatCellsDiv className='chat-message-user'>
					{message.sender}
				</StyledChatCellsDiv>
				<StyledChatCellsDiv className='chat-message-time'>
					{message.timestamp}
				</StyledChatCellsDiv>
				<StyledChatCellsDiv className='chat-message-text'>
					{message.content}
				</StyledChatCellsDiv>
			</StyledChatCellsDiv>
		);
	} else {
		return (
			<StyledChatCellsDiv className='chat-message-client chat'>
				<StyledChatCellsDiv className='chat-message-user'>
					{message.sender}
				</StyledChatCellsDiv>
				<StyledChatCellsDiv className='chat-message-time'>
					{message.timestamp}
				</StyledChatCellsDiv>
				<StyledChatCellsDiv className='chat-message-text'>
					{message.content}
				</StyledChatCellsDiv>
			</StyledChatCellsDiv>
		);
	}
};

export default ChatCells;
