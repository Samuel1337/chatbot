import React from "react";
import ChatButton from "../chatButton/chatButton";
import ChatBox from "../chatBox/chatBox";
import Options from "./options";
import $ from "jquery";

class ChatContainer extends React.Component {
    constructor(props) {
        super(props);

        this.startingTime = this.getCurrentTime();

        this.options = Options();

        this.state = {
            open: false,
            conversation: [this.getInitialMessage()]
        };
        this.toggle = this.toggle.bind(this);
        this.getCurrentTime = this.getCurrentTime.bind(this);
        this.getInitialMessage = this.getInitialMessage.bind(this);
        this.scrollSmoothlyToBottom = this.scrollSmoothlyToBottom.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.camelize = this.camelize.bind(this);
        this.respond = this.respond.bind(this);
        this.redirect = this.redirect.bind(this);
        this.randomText = this.randomText.bind(this);
    }


    toggle() {
        this.setState({open: !this.state.open});
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

    getInitialMessage() {
        let initialMessage = this.options.home;
        initialMessage["time"] = this.getCurrentTime();
        return initialMessage;
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

    camelize(text) {
        if (text.includes('&')) {
            let temp = text.split('&').join('');
            text = temp;
        }    
        let array = text.toLowerCase().split(' ');
        return array.map(word => {
            if (word === array[0]) {
                return word;
            } else {
                return word[0].toUpperCase() + word.slice(1);
            }
        }).join('');
    }

    respond() {
        let conversation = [...this.state.conversation];
        let lastMessage = conversation[conversation.length - 1].text;
        lastMessage = lastMessage.toLowerCase().split(' ').join('');
        let response;
        
        if (lastMessage.includes("applynow")) {
            response = this.options.applyNow;
        } else if (lastMessage.includes("virtualfrontdesk")) {
            response = this.options.virtualFrontDesk;
        } else if (lastMessage.includes("summerclasses")) {
            response = this.options.summerClasses;
        } else if (lastMessage.includes("studentservices")) {
            response = this.options.studentServices;
        } else if (lastMessage.includes("admissions&records")) {
            response = this.options.admissionsRecords;
        } else if (lastMessage.includes("careerservices")) {
            response = this.options.careerServices;
        } else if (lastMessage.includes("dreamcenter")) {
            response = this.options.dreamCenter;
        } else {
    
            response = {
                sender: "bot",
                text: this.randomText()
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
            if (response.title) {
                this.props.handleCurrent(this.camelize(response.title));
            }
            conversation.push(response);
            this.setState({conversation: conversation});
            this.scrollSmoothlyToBottom();
        }, 1500);
    }

    redirect(message, addon) {
        let conversation = [...this.state.conversation];
        if (addon === "linebreak") { conversation.push({linebreak: true}) }
        if (message.title) {
            this.props.handleCurrent(this.camelize(message.title));
        }
        conversation.push(message);
        
        this.setState({conversation: conversation});
        this.scrollSmoothlyToBottom();
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
                    redirect={this.redirect}
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