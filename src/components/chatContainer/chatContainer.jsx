import React, { Children } from "react";
import ChatButton from "../chatButton/chatButton";
import ChatBox from "../chatBox/chatBox";
import Options from "../../options";
import $ from "jquery";

class ChatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.startingTime = this.getCurrentTime();

        this.options = Options();

        this.state = {
            open: false,
            conversation: [
                {
                    sender: "bot",
                    text: "Hello there! How can I help you?",
                    time: this.startingTime,
                    tag: "home",
                    children: ["studentServices", "virtualFrontDesk", "summerClasses", "applyNow"]
                }
            ]
        };
        this.getCurrentTime = this.getCurrentTime.bind(this);
        this.toggle = this.toggle.bind(this);
        this.scrollSmoothlyToBottom = this.scrollSmoothlyToBottom.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.respond = this.respond.bind(this);
        this.randomText = this.randomText.bind(this);
    }

    getCurrentTime() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let currentTime = hours + ":";
        if (minutes < 10) {
            minutes = "0" + minutes
        }
        currentTime += minutes;
        return currentTime;
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

        let conversation = this.state.conversation;
        conversation.push({
            sender: "user",
            text: message,
            time: this.getCurrentTime()
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
                text: this.randomText(),
                time: this.getCurrentTime(),
                tag: "sorry"
            }
        }
        
        response['time'] = this.getCurrentTime();
        
        window.setTimeout(() => {
            conversation.push({loading: true});
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

    randomText() {
        let sorryTexts = [
            "Sorry, I don't understand.",
            "I couldn't find what you're looking for.",
            "That seems to be unavailable right now.",
            "That's not available at the moment.",
            "I didn't quite get that.",
            "Speak more clearly, I'm not that smart.",
            "Come again?",
            "What do you mean?"
        ]
        return sorryTexts[Math.floor(Math.random() * 7)];
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