import React from "react";

const ChatInputs = (props) => {
	return (
		<form onSubmit={(e) => props.handleSendMessage(e)}>
			<input
				type='text'
				value={props.sendMessage}
				onChange={props.onMessageChange}
				placeholder='Type your message here'
			/>
			<button type='submit'>Send</button>
		</form>
	);
};

export default ChatInputs;
