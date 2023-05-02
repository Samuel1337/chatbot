import React from "react";
import "./message.scss";
import { IoIosRefresh, IoIosHome } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";
import Options from "../chatContainer/options";

class Message extends React.Component {
    constructor(props) {
        super(props);

        this.options = Options();
        
        this.displayText = this.displayText.bind(this);
        this.displayOptions = this.displayOptions.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.controlButtons = this.controlButtons.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleControl = this.handleControl.bind(this);   
    }

    displayText() {
        let message = this.props.message;
        let index = this.props.index;

        if (message.sender === "bot") {
            return (
                <li className="message-container" key={`li-${index}`}>
                    <p className="message-name">CSM Support</p>
                    <div className="message-bubble-container">
                        <div className="message-bubble-main">
                            <div className="message-bubble bot">
                                <p>{message.text}</p>
                            </div>
                            <p className="message-timestamp">{message.time}</p>
                        </div>
                        <ul className="options-list">
                            {this.displayOptions()}
                        </ul>
                    </div>
                </li>
            )
        } else if (message.sender === "user") {
            return (
                <li className="message-container" key={`li-${index}`}>
                    <div className="message-bubble-container">
                        <div className="message-bubble-main">
                            <p className="message-timestamp">{message.time}</p>
                            <div className="message-bubble user">
                                <p>{message.text}</p>
                            </div>
                        </div>
                    </div>
                </li>
            )
        } else if (message.loading) {
            return (
                <li className="message-container">
                    <div className="message-bubble-container">
                        <div className="message-bubble-loading">
                            <div className="message-bubble loading">
                                <p>
                                    <svg height="80" width="80" className="loader">
                                        <circle className="dot" cx="10" cy="20" r="3" style={{fill:`grey`}} />
                                        <circle className="dot" cx="20" cy="20" r="3" style={{fill:`grey`}} />
                                        <circle className="dot" cx="30" cy="20" r="3" style={{fill:`grey`}} />
                                    </svg>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>       
            )
        } else if (message.linebreak) {
            return (
                <li className="message-container">
                    <hr></hr>
                </li>
            )
        }
    }

    displayOptions() {
        let message = this.props.message;
        
        if (message.children) {
            let options = message.children.map((child, index) => {
                return (
                    <li className="option-container" key={`opt-${index}`}>
                        <div className="option-bubble" onClick={() => this.handleClick(child)}>
                            {this.handleTitle(child)}  
                        </div>
                    </li>
                )
            })
            return (
                <>
                    {options}
                    {this.controlButtons()}
                </>
            )
        }
    }

    handleTitle(child) {
        let message = this.options[child];
        let title = message.title;

        if (message.link && this.props.message.children.length === 1) {
            return (
                <p className="option-title">{title}<HiExternalLink className="option-link-icon"/></p>
                )
            } else {
            return (
                <p>{title}</p>
            )
        }
    }

    controlButtons() {
        let conversation = this.props.conversation;
        let message = this.props.message;
        let last = conversation[conversation.length - 1];

        if (message.parent && message.title === last.title) {
            return (
                <li className="control-buttons-container">
                    <div className="control-buttons-div">
                        <div className="control-button" onClick={() => this.handleControl("return")}>
                            <p className="control-button-icon"><IoIosRefresh /></p>
                        </div>
                        <div className="control-button" onClick={() => this.handleControl("home")}>
                            <p className="control-button-icon"><IoIosHome /></p>
                        </div>
                    </div>
                </li>
            )
        }
    }

    handleClick(input) {
        let message = this.options[input];  
        
        if (message.link && this.props.message.children.length === 1) {
            window.open(message.link, '_blank');
        } else {
            this.props.sendMessage(message.title);
        }
    }

    handleControl(input) {
        let message = this.props.message;
        let parentMessage;
        console.log(message);
        if (input === "return") {
            if (message.parent) { parentMessage = this.options[message.parent] }
            this.props.redirect(parentMessage);
        } else if (input === "home") {
            this.props.redirect(this.options.home, "linebreak");
        }
    }

    render() {
        return this.displayText();
    }
}

export default Message;