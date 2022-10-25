/* eslint-disable react-hooks/rules-of-hooks */
import React, {
	useContext,
	useEffect,
	useState,
	useRef,
	useCallback,
} from "react";
import axios from "axios";
import ChatCells from "../components/ChatCells";
import ChatInputs from "../components/ChatInputs";
import useChats from "../hooks/useChats";
import StyledChatCells from "../components/StyledChatCellsDiv";
import StyledTitle from "../components/StyledTitle";

const path = "http://localhost:3000/messages";

const chats = () => {
	const [messages, setMessages] = useState([]);
	const [sendMessage, setSendMessage] = useState("");
	const [position, setPosition] = useState(0);
	const { displayChats, hasMore, loading } = useChats(messages, position);
	const divRef = useRef(null);
	const observer = useRef();

	const lastChatRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPosition((prevPosition) => prevPosition + 5);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	useEffect(() => {
		divRef.current.scrollIntoView({ behavior: "smooth" });
		// setAccuCount(messages.length - accuCount);
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

	useEffect(() => {
		console.log(`display chat ${displayChats}`);
	}, [displayChats]);

	//Handle infinite scroll

	const isTop = ([e]) => {
		return e.getBoundingClientRect().top === 8;
	};

	const refAssignCallback = ([e]) => {
		if (e) {
			//the containerRef is currently null, ref available = mounted.
			var element = e;
			var scrollWidth = element.scrollWidth;
			var clientWidth = element.getBoundingClientRect().width;
		}
	};

	const trackScrolling = () => {
		const wrappedElement =
			window.document.getElementsByClassName("chat-container");

		if (isTop(wrappedElement)) {
			alert('í am at the top');
			if(position < messages.length){
				setPosition((prevPosition) => prevPosition +2);
			}
		}
	};

	//Return the message element

	return (
		<div>
			<div className='chat-container'>
				<StyledTitle className='chat-title'>Chat with A</StyledTitle>
				<div className='chat-group'>
					{displayChats.map((message, index) => {
						if (displayChats.length === index + 1) {
							return (
								<ChatCells
									key={message?.id}
									message={message}
									ref={lastChatRef}
								/>
							);
						} else {
							return (
								<ChatCells
									key={message?.id}
									message={message}
								/>
							);
						}
					})}
				</div>
				{/* Refractor this into component */}
				<div className='chat-input' ref={divRef}>
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
