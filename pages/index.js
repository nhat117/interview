import React, { useContext } from "react";
import { Context } from "../context/index.jsx";
import { useRouter } from "next/router.js";
import Image from "next/image.js";
import axios from "axios";
import StyledButton from "../components/StyledButton.jsx";
import StyledTitle from "../components/StyledTitle.jsx";

export default function Auth() {
	const { isLoggedIn, setIsLoggedIn } = useContext(Context);
	const router = useRouter();
	//Change page to chat
	const toChatPage = (e) => {
		e.preventDefault();
		if (isLoggedIn) {
			router.push("/chats");
		}
	};

	return (
		<div className=''>
			<div className='auth-container'>
				<form className='auth-form' onSubmit={(e) => toChatPage(e)}>
					<div className='auth-title'></div>
					<StyledTitle>Mock Chat App</StyledTitle>
                    <Image src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOQlWXZGYOWn9YdsIBGnN5KswJPbRc1_ZTg&usqp=CAU" alt="Picture of the author" width={200} height={200} />
					<StyledButton type='submit' onClick={setIsLoggedIn(true)}>
						Login
					</StyledButton>
				</form>
			</div>
		</div>
	);
}
