import React from "react";
import ChatButton from "../chatButton/chatButton";
import ChatBox from "../chatBox/chatBox";

class ChatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            conversation: [
                {bot: "Hello there! How can I help you?"},
                {user: "I'm doing fine, thanks!"},
                {bot: "Sure! Let me know if you have any questions."},
            ]
        };
        this.toggle = this.toggle.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    toggle() {
        this.setState({open: !this.state.open});
    }

    sendMessage(message) {
        let conversation = this.state.conversation;
        conversation.push({user: message});

        this.setState({conversation: conversation});
    }

    render() {
        return (
            <>
                <ChatBox
                    open={this.state.open}
                    conversation={this.state.conversation}
                    sendMessage={this.sendMessage}
                />
                <ChatButton
                    open={this.state.open}
                    toggle={this.toggle}    
                />
            </>
        )
    }
}

export default ChatContainer;