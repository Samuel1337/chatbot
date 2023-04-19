import React from "react";
import ChatButton from "../chatButton/chatButton";
import ChatBox from "../chatBox/chatBox";

class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <>
                <ChatBox
                    open={this.state.open}
                />
                <ChatButton
                    open={this.state.open}
                    toggle={this.toggle}    
                />
            </>
        )
    }
}

export default Chat;