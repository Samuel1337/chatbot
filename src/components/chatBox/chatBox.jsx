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
        this.scrollSmoothlyToBottom = this.scrollSmoothlyToBottom.bind(this);
        this.clearInitialSpaces = this.clearInitialSpaces.bind(this);
        this.checkForEnter = this.checkForEnter.bind(this);
        this.updateText = this.updateText.bind(this);
        this.send = this.send.bind(this);
    }

    componentDidUpdate() {
        let chatBox = document.getElementById("fade-in");
        if (this.state.text === '\n') this.setState({text: ''});

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
        return this.props.conversation.map((message, index) => {

            if (message.sender === "bot") {
                return (
                    // Bot's Message Bubbles
                    <li className="message-container" key={`msg-${index}`}>
                        <p className="message-name">CSM Support</p>
                        <div className="message-bubble-container">
                            <div className="message-bubble bot">
                                <p>{message.text}</p>
                            </div>
                            <p className="message-timestamp">{message.time}</p>
                        </div>
                    </li>
                )
            } else if (message.sender === "user") {
                return (
                    // User's Message Bubbles
                    <li className="message-container" key={`msg-${index}`}>
                        <div className="message-bubble-container">
                            <p className="message-timestamp">{message.time}</p>
                            <div className="message-bubble user">
                                <p>{message.text}</p>
                            </div>
                        </div>
                    </li>
                )
            }
            
        });
        
    }

    clearInitialSpaces() {
        let array = this.state.text.split('');
    
        // checks for ' ' and '\n'
        for (let i = 0; array[i] === ' ' || (array[i] === '\\' && array[i + 1] === 'n'); i++) {
            array[i] = '';
        }

        let clearText = array.join('');

        this.setState({text: clearText});
    }

    checkForEnter(e) {
        this.clearInitialSpaces();

        if (e.key === 'Enter') {
            this.send();
        }
    }

    updateText() {
        return e => this.setState({text: e.currentTarget.value});
    }

    send() {
        
        if (this.state.text !== '' && this.state.text !== ' ') {
            this.props.sendMessage(this.state.text);
            this.setState({text: ''});
            this.scrollSmoothlyToBottom();
        }
    }

    render() {

        return (
            <div className="chat-box" id="fade-in">
                <div className="chat-header">
                    <p className="chat-title">CSM Support</p>
                </div>
                <div className="chat-area" id="scroll">
                    <ul className="message-list">
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
                        onKeyDown={this.checkForEnter}
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