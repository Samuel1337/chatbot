import React, { Children } from "react";
import ChatButton from "../chatButton/chatButton";
import ChatBox from "../chatBox/chatBox";

class ChatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.date = new Date();
        this.startingTime = this.date.getHours() + ":" + this.date.getMinutes();

        /*
        
        INTEGRATION INSTRUCTIONS:

        state = {
            open: true || false <-- opens and closes the chat
            
            conversation: [
                {
                    sender: "user",
                    text: "User's message",         <-- example of user message object
                    time: "timestamp (HH:MM)"
                },
                
                {
                    sender: "bot",
                    text: "Bot's message",          <-- example of bot message object
                    time: "timestamp (HH:MM)",
                    tag: "home",

                    options: [
                        {
                            title: "title",
                            link: "www.example.com",
                            child: ""
                        }
                    ]

                }
            ]
        }
        
        */


        this.state = {
            open: false,
            conversation: [
                {
                    sender: "bot",
                    text: "Hello there! How can I help you?",
                    time: this.startingTime,
                    tag: "home",
                    options: [
                        {
                            title: "Apply Now",
                            link: "",
                            child: ""
                        },
                        {
                            title: "Apply Now",
                            type: "",
                            child: ""
                        }
                    ]
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