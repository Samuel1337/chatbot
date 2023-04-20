import React from "react";
import {IoIosSend} from "react-icons/io";
import "./chatBox.scss";


class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.displayMessages = this.displayMessages.bind(this);
    }

    componentDidUpdate() {
        let chatBox = document.getElementById("fade-in");

        if (this.props.open && !chatBox.classList.contains("show")) {
            chatBox.classList.add("show");
        } else if (!this.props.open && chatBox.classList.contains("show")) {
            chatBox.classList.remove("show");
        }

        this.displayMessages();
    }

    displayMessages() {
        return this.props.conversation.map(message => {

            if (message.bot) {
                return (
                    <li className="message-container">
                        <p className="message-name">CSM Support</p>
                        <div className="message-bubble bot">
                            {message.bot}
                        </div>
                    </li>
                )
            } else if (message.user) {
                return (
                    <li className="message-container">
                        <div className="message-bubble user">
                            {message.user}
                        </div>
                    </li>
                )
            }
            
        });
    }

    render() {

        return (
            <div className="chat-box" id="fade-in">
                <div className="chat-header">
                    <p className="chat-title">CSM Support</p>
                </div>
                <div className="chat-area">
                    <ul className="message-list">
                        {this.displayMessages()}
                    </ul>
                </div>
                <div className="chat-footer">
                    <textarea className="send-text-area" cols="60" rows="1" spellCheck="false"></textarea>
                    <div className="send-button">
                        <IoIosSend />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatBox;