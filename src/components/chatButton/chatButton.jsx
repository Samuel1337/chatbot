import React from "react";
import {BsFillChatDotsFill} from "react-icons/bs";
import {CgClose} from "react-icons/cg";
import "./chatButton.scss";

class ChatButton extends React.Component {
    constructor(props) {
        super(props);
        this.openOrClose = this.openOrClose.bind(this);
    }

    openOrClose() {
        return (
            this.props.open
            ? <CgClose className="chat-button-icon" />
            : <BsFillChatDotsFill className="chat-button-icon" />
        );
    }

    render() {
        
        return (
            <div className="chat-button" onClick={this.props.toggle}>
                {this.openOrClose()}
            </div>
        )
    }
}

export default ChatButton;