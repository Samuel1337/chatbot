import React from "react";
import "./message.scss";
import Options from "../../options";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.displayText = this.displayText.bind(this);
        this.displayOptions = this.displayOptions.bind(this);
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
        } 
    }

    displayOptions() {
        let message = this.props.message;
        
        if (message.children) {
            console.log(message.children)
            return message.children.map((child, index) => {
                return (
                    <li className="option-container" key={`opt-${index}`}>
                        <div className="option-bubble">
                            <p>{Options()[child].title}</p>  
                        </div>
                    </li>
                )
            })
        }
    }

    render() {
        return this.displayText();
    }
}

export default Message;