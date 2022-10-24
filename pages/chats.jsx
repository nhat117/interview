import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import ChatCells from "../components/ChatCells";
import ChatInputs from "../components/ChatInputs";

const path = "http://localhost:3000/messages";

const chats = () => {
	const [messages, setMessages] = useState([]);
	const [sendMessage, setSendMessage] = useState("");
    const divRef = useRef(null);
    
    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: 'smooth' });
    });


	const fetchMessages = async () => {
		const tmpMsg = localStorage.getItem("messages");
		if (tmpMsg === null) {
			console.log("fetching messages");
			const response = await axios.get(path);
			setMessages(response.data);
			localStorage.setItem("messages", JSON.stringify(response.data)); 
		} else {
			console.log("using local storage");
			setMessages(JSON.parse(tmpMsg));
		}
		//Add message into local storage
	};

	//Function to send message
	const handleSendMessage = async (e) => {
		e.preventDefault();
		const newMessage = {
			id: `m${messages.length + 1}`,
			sender: "B",
			content: sendMessage,
			timestamp: new Date().toLocaleString(),
		};
		//Push data into local storage
		setMessages([...messages, newMessage]);
		localStorage.setItem(
			"messages",
			JSON.stringify([...messages, newMessage])
		);
		setSendMessage("");
	};

	//Fetch message when rendering the component
	//TODO: Update infinite scroll Do not load all message

	const onMessageChange = (e) => {
		setSendMessage(e.target.value);
	};

	useEffect(() => {
		fetchMessages();
		document.addEventListener("scroll", trackScrolling);
		return () => {
			document.removeEventListener("scroll", trackScrolling);
		};
	}, []);

	//Handle infinite scroll

	const isBottom = ([e]) => {
        if(e === undefined) {
            // console.log("e is undefined");
        }
		return e.getBoundingClientRect().bottom <= window.innerHeight;
	};

    const isTop = ([e]) => {
        if(e === undefined) {
            // console.log("e is undefined");
        }
        // console.log(e.getBoundingClientRect().top);
		return e.getBoundingClientRect().top === 0;
	};

    const refAssignCallback = ([e]) => {
        if (e) {
          //the containerRef is currently null, ref available = mounted.
          var element = e;
          var scrollWidth = element.scrollWidth;
          var clientWidth = element.getBoundingClientRect().width;

        } 
    }

	const trackScrolling = () => {
		const wrappedElement = window.document.getElementsByClassName("chat-container");
        // console.log(wrappedElement);
		if (isBottom(wrappedElement)) {
			console.log("header bottom reached");
			// document.removeEventListener("scroll", trackScrolling);
		} 

        if (isTop(wrappedElement)) {
            console.log("header top reached");
            // document.removeEventListener("scroll", trackScrolling);
        }
	};

	return (
		<div>
			<div className='chat-container'>
				<div className='chat-title'>Chat</div>
				<div className='chat-messages'>
					{messages.map((message) => {
						return <ChatCells message={message} />;
					})}
				</div>
				{/* Refractor this into component */}
				<div className='chat-input' ref = {divRef}>
					<ChatInputs
						handleSendMessage={handleSendMessage}
						sendMessage={sendMessage}
						onMessageChange={onMessageChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default chats;
