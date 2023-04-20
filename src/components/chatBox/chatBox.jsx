import React from "react";
import {IoIosSend} from "react-icons/io";
import "./chatBox.scss";
import $ from 'jquery';

class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.displayMessages = this.displayMessages.bind(this);
        this.updateText = this.updateText.bind(this);
        this.send = this.send.bind(this);
        this.scrollSmoothlyToBottom = this.scrollSmoothlyToBottom.bind(this);
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

    scrollSmoothlyToBottom() {
        const element = $("#scroll");
        element.animate({
            scrollTop: element.prop("scrollHeight")
        }, 500);
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

    updateText() {
        return e => this.setState({text: e.currentTarget.value});
    }

    send() {
        this.props.sendMessage(this.state.text);
        this.setState({text: ''});
        this.scrollSmoothlyToBottom();
    }

    render() {

        return (
            <div className="chat-box" id="fade-in">
                <div className="chat-header">
                    <p className="chat-title">CSM Support</p>
                </div>
                <div className="chat-area">
                    <ul className="message-list" id="scroll">
                        {this.displayMessages()}
                    </ul>
                </div>
                <div className="chat-footer">
                    <textarea
                        className="send-text-area"
                        cols="60"
                        rows="1"
                        spellCheck="false"
                        placeholder="Write a reply..."
                        value={this.state.text}
                        onChange={this.updateText()}
                    ></textarea>
                    <div className="send-button" onClick={this.send}>
                        <IoIosSend />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatBox;