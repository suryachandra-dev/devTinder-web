import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import api from "../utils/axiosInterceptor";

const Chat = () => {
    const { targetUserId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const user = useSelector((store) => store.user);
    const userId = user?._id;
    const firstName = user?.firstName;
    const lastName = user?.lastName;

    const socketRef = useRef(null); // ✅ hold persistent socket

    const sendMessage = () => {
        if (!newMessage || !socketRef.current) return;
        socketRef.current.emit("sendMessage", {
            firstName,
            lastName,
            userId,
            targetUserId,
            newMessage
        });
        setNewMessage("");
    };

    const fetchChatHistory = async () => {
        try {
            const res = await api.get(`/chat/${targetUserId}`);
            const data = await res.data;
            const chatHistory = data.messages.map((message) => {
                return {
                    firstName: message.senderId.firstName,
                    lastName: message.senderId.lastName,
                    content: message.content,
                    createdAt: message?.createdAt
                };
            });
            setMessages(chatHistory);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (!userId || !targetUserId) return;

        fetchChatHistory();

        socketRef.current = createSocketConnection(); // ✅ create once
        socketRef.current.emit("joinChat", {
            firstName,
            lastName,
            userId,
            targetUserId
        });

        socketRef.current.on("receivedMessage", ({ firstName, lastName, newMessage, createdAt }) => {
            setMessages((prev) => [
                ...prev,
                { firstName, lastName, content: newMessage, createdAt }
            ]);
        });

        return () => {
            socketRef.current.disconnect(); // ✅ clean up
        };
    }, [userId, targetUserId]);

    return (
        <div className="w-1/2 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
            <h1 className="p-5 border-b border-gray-200">Chat</h1>
            <div className="flex-1 overflow-y-scroll p-5">
                {messages?.map((message, index) => (
                    <div key={index} className={`chat ${message.firstName === firstName && message.lastName === lastName ? "chat-end" : "chat-start"}`}>

                        <div className="chat-header">
                            {message.firstName + " " + message.lastName}
                            <time className="text-xs opacity-50">
                                {new Date(message?.createdAt)?.toLocaleTimeString("en-GB", {
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })}
                            </time>
                        </div>
                        <div className="chat-bubble">{message?.content}</div>
                        <div className="chat-footer opacity-50">Seen</div>
                    </div>
                ))}
            </div>
            <div className="p-5 border-t border-gray-200 flex justify-between gap-2">
                <input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    type="text"
                    className="w-full p-2 border border-gray-200 rounded-md"
                    placeholder="Type a message..."
                />
                <button
                    onClick={sendMessage}
                    className="bg-blue-500 text-white p-2 rounded-md"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
