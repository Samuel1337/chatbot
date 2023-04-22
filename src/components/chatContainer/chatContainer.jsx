import React, { Children } from "react";
import ChatButton from "../chatButton/chatButton";
import ChatBox from "../chatBox/chatBox";
import Options from "../../options";
import $ from "jquery";

class ChatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.date = new Date();
        this.startingTime = this.date.getHours() + ":" + this.date.getMinutes();

        this.options = Options();

        this.state = {
            open: false,
            conversation: [
                {
                    sender: "bot",
                    text: "Hello there! How can I help you?",
                    time: this.startingTime,
                    tag: "home",
                    children: ["applyNow", "virtualFrontDesk", "summerClasses", "studentServices"]
                }
            ]
        };
        this.toggle = this.toggle.bind(this);
        this.scrollSmoothlyToBottom = this.scrollSmoothlyToBottom.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.respond = this.respond.bind(this);
    }

    toggle() {
        this.setState({open: !this.state.open});
    }

    scrollSmoothlyToBottom() {
        const element = $("#scroll");
        element.animate({
            scrollTop: element.prop("scrollHeight")
        }, 500);
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
        this.scrollSmoothlyToBottom();
        this.respond();
    }

    respond() {
        let conversation = [...this.state.conversation];
        let lastMessage = conversation[conversation.length - 1].text;
        lastMessage = lastMessage.toLowerCase().split(' ').join('');
        let response;
        
        if (lastMessage.includes("applynow")) {
            response = Options().applyNow;
        } else if (lastMessage.includes("virtualfrontdesk")) {
            response = Options().virtualFrontDesk;
        } else if (lastMessage.includes("summerclasses")) {
            response = Options().summerClasses;
        } else if (lastMessage.includes("studentservices")) {
            response = Options().studentServices;
        } else if (lastMessage.includes("admissions&records")) {
            response = Options().admissionsRecords;
        } else if (lastMessage.includes("careerservices")) {
            response = Options().careerServices;
        } else if (lastMessage.includes("dreamcenter")) {
            response = Options().dreamCenter;
        } else {
            response = {
                sender: "bot",
                text: "Sorry, I don't understand.",
                time: this.startingTime,
                tag: "sorry"
            }
        }
        
        response['sender'] = 'bot';
        
        window.setTimeout(() => {
            conversation.push({loading: true});
            console.log(conversation)
            this.setState({conversation: conversation});
            this.scrollSmoothlyToBottom();
        }, 500);

        window.setTimeout(() => {
            conversation.pop()
            conversation.push(response);
            this.setState({conversation: conversation});
            this.scrollSmoothlyToBottom();
        }, 1500);
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