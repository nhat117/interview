import React, { useContext } from "react";
import { Context } from "../context/index.jsx";
import { useRouter } from "next/router.js";
import axios from "axios";
import StyledButton from "../components/StyledButton.jsx";

export default function Auth() {
    const { isLoggedIn, setIsLoggedIn } = useContext(Context);
    const router = useRouter();
    //Change page to chat
    const toChatPage = (e) => {
        e.preventDefault();
        if(isLoggedIn) {
            router.push("/chats");
        }
    };

	return (
		<div className=''>
			<div className='auth-container'>
				<form className='auth-form' onSubmit={e => toChatPage(e)}>
                    <div className='auth-title' ></div>
					<button type='submit' onClick={setIsLoggedIn(true)}>Login</button>
                    {/* <StyledButton label='Login' onClicked = {setIsLoggedIn(!isLoggedIn)} /> */}
				</form>
			</div>
		</div>
	);
}
