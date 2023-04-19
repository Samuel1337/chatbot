import React from "react";
import "./chatBox.scss";
import $ from "jquery";

class ChatBox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        $("#fade-in").toggleClass("show");
    }

    render() {

        return (
            <div className="chatBox" id="fade-in">
                <div className="chatHeader">
                    <p className="chatTitle">CSM Support</p>
                </div>
                <div className="chatArea">

                </div>
            </div>
        )
    }
}

export default ChatBox;