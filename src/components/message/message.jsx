import React from "react";
import "./message.scss";
import Options from "../../options";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.displayText = this.displayText.bind(this);
        this.displayOptions = this.displayOptions.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        }
    }

    displayOptions() {
        let message = this.props.message;
        
        if (message.children) {
            return message.children.map((child, index) => {
                let title = Options()[child].title;
                return (
                    <li className="option-container" key={`opt-${index}`}>
                        <div className="option-bubble" onClick={() => this.handleClick(child)}>
                            <p>{title}</p>  
                        </div>
                    </li>
                )
            })
        }
    }

    handleClick(child) {
        let node = Options()[child]; 

        if (node.link && this.props.message.children.length === 1) {
            window.open(node.link, '_blank');
        } else {
            this.props.sendMessage(node.title);
        }
    }

    render() {
        return this.displayText();
    }
}

export default Message;