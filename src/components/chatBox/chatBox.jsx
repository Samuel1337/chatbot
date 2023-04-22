import React from "react";
import {IoIosSend} from "react-icons/io";
import "./chatBox.scss";
import $ from 'jquery';
import Message from "../message/message";

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
            return <Message message={message} index={index} key={`msg-${index}`} />            
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