import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ChatCells from "../components/ChatCells";

const path = 'http://localhost:3000/messages';

const chats = () => {
	const [messages, setMessages] = useState([]);
    const [sendMessage, setSendMessage] = useState('');

    const fetchMessages = async () => {
        const tmpMsg = localStorage.getItem('messages');
        if(tmpMsg === null) {
            console.log('fetching messages');
            const response = await axios.get(path);
            setMessages(response.data);
            localStorage.setItem('messages', JSON.stringify(response.data));

        } else {
            console.log('using local storage');
            setMessages(JSON.parse(tmpMsg));
        }
        //Add message into local storage
    };
    //Check login status, if not login, redirect back to login page
    

    //Function to send message
    const handleSendMessage = async (e) => {
        e.preventDefault();
        const newMessage = {
            id: `m${messages.length + 1}`,
            sender: 'B',
            content: sendMessage,
            timestamp: new Date().toLocaleString()
        }
        //Push data into local storage
        setMessages([...messages, newMessage]);
        localStorage.setItem('messages', JSON.stringify([...messages, newMessage]));
        setSendMessage('');
    };


    //Fetch message when rendering the component
    //TODO: Update infinite scroll Do not load all message

    const onMessageChange = (e) => {
        setSendMessage(e.target.value);
    };

    useEffect(() => {
        fetchMessages();
    }, []);

	return <div>
        <div className='chat-container'>
            <div className='chat-title'>Chat</div>
            <div className='chat-messages'>
                {messages.map((message) => {
                    return <ChatCells message = {message}/>
                })}
            </div>
        {/* Refractor this into component */}
            <div className='chat-input'>
                <form onSubmit={e => handleSendMessage(e)}>
                    <input type='text' value = {sendMessage} onChange = {onMessageChange} placeholder='Type your message here' />
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    </div>;
};

export default chats;
