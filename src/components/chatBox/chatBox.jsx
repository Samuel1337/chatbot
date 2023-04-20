import React from "react";
import {IoIosSend} from "react-icons/io";
import "./chatBox.scss";


class ChatBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        let chatBox = document.getElementById("fade-in");

        if (this.props.open && !chatBox.classList.contains("show")) {
            chatBox.classList.add("show");
        } else if (!this.props.open && chatBox.classList.contains("show")) {
            chatBox.classList.remove("show");
        }
    }

    render() {

        return (
            <div className="chat-box" id="fade-in">
                <div className="chat-header">
                    <p className="chat-title">CSM Support</p>
                </div>
                <div className="chat-area">

                </div>
                <div className="chat-footer">
                    <textarea className="send-text-area" cols="60" rows="1" spellcheck="false"></textarea>
                    <div className="send-button">
                        <IoIosSend />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatBox;