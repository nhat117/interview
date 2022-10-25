import React from "react";
import StyledButton from "./StyledButton";
import { StyledInput } from "./StyledTextInput";

const ChatInputs = (props) => {
	return (
		<form onSubmit={(e) => props.handleSendMessage(e)}>
			<StyledInput
				type='text'
				value={props.sendMessage}
				onChange={props.onMessageChange}
				placeholder='Type your message here'
			/>
			<StyledButton type='submit'>Send</StyledButton>
		</form>
	);
};

export default ChatInputs;
