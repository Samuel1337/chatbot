import React from "react";
import Options from "../chatContainer/options";
import "./optionsPanel.scss";

class OptionsPanel extends React.Component {
    constructor(props) {
        super(props);
        
        this.options = Options();

        this.state = {
            current: this.props.current,
            options: this.objectToArray(this.options)
        }
        
        this.objectToArray = this.objectToArray.bind(this);
        this.displayOptions = this.displayOptions.bind(this);
        this.displayChildren = this.displayChildren.bind(this);
    }

    componentDidUpdate() {
        if (this.props.current !== this.state.current) {
            this.setState({current: this.props.current});
        }
    }

    objectToArray(object) {
        let array = [];
        for (const tag in object) {
            array.push({[tag]: object[tag]});
        }
        return array;
    }

    displayChildren(array) {
        let string = "";
        array.forEach(element => {
            string += `\"` + element + `\", `;
        });
        return `[` + string.slice(0, -2) + `]`;
    }

    displayOptions() {
        let current = this.state.current;
        return this.state.options.map((message, i) => {
            let tag = Object.keys(message)[0];
            let highlight = "";
            if (tag.includes(current)) {
                highlight = "highlight";
            }
            return (
                <li className={`options-panel-li ${highlight}`} key={`opt-pnl-${i}`}>
                    <div className="options-panel-li-tag">
                        <p>{tag}:</p>
                    </div>
                    <div className="options-panel-li-object">
                    <span>{`{`}</span>
                    <p className="white-space">sender: <span>"{message[tag].sender}"</span>,</p>
                    <p className="white-space">text: <span>"{message[tag].text}"</span>,</p>
                    <p className="white-space">title: <span>"{message[tag].title}"</span>,</p>
                    <p className="white-space">link: <span>"{message[tag].link}"</span>,</p>
                    <p className="white-space">parent: <span>"{message[tag].parent}"</span>,</p>
                    <p className="white-space">children: <span>
                        {this.displayChildren(message[tag].children)}
                    </span></p>
                    <span>{`},`}</span>
                    </div>
                </li>
            )
        });
    }

    render() {

        return (
            <div className="options-panel">
                <ul className="options-panel-ul">
                    <h3>Options: {`{`}</h3>
                    {this.displayOptions()}
                    <h3>{`}`}</h3>
                </ul>
            </div>
        )
    }
}

export default OptionsPanel;