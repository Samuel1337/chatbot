import React, { Children } from "react";
import ChatButton from "../chatButton/chatButton";
import ChatBox from "../chatBox/chatBox";
import Options from "../../options";

class ChatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.date = new Date();
        this.startingTime = this.date.getHours() + ":" + this.date.getMinutes();

        this.options = Options();

        console.log(this.options);
        
        this.state = {
            open: false,
            conversation: [
                {
                    sender: "bot",
                    text: "Hello there! How can I help you?",
                    time: this.startingTime,
                    tag: "home",
                    children: ["applyNow", "virtualFrontDesk", "summerClasses", "studentServices"]

                },
                {
                    sender: "user",
                    text: "I'm doing fine, thanks!",
                    time: this.startingTime
                },
                {
                    sender: "bot",
                    text: "Sure! Let me know if you have any questions.",
                    time: this.startingTime
                }
            ]
        };
        this.toggle = this.toggle.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    toggle() {
        this.setState({open: !this.state.open});
    }

    sendMessage(message) {
        let date = new Date();
        let currentTime = date.getHours() + ":" + date.getMinutes();

        let conversation = this.state.conversation;
        conversation.push({
            sender: "user",
            text: message,
            time: currentTime
        });

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