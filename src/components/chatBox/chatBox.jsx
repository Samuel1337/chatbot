import React from "react";
import {BsFillChatDotsFill} from "react-icons/bs";
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
                    <textarea className="" cols="30" rows="10"></textarea>
                    <div className="send-button">
                        <BsFillChatDotsFill />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatBox;