import React from "react";

const StyledButton = (props) => {
	return <button type='submit' onClick={props.onClick}>{props.label}</button>;
};

export default StyledButton;
