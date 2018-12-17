import React, {Component} from 'react'
import './messages.scss'
import { connect } from "react-redux";



class Messages extends Component {
    render() {
        return (
            <div className="message-container" id="messages">
                <div className="message">
                    <div className="message_avatar"/>
                    <div className="message_text-post">98 pirates on the worm from the desert</div>
                    <div className="message_post-date">XX.XX.19XX</div>
                </div>
                <p className="main-text">There is no oldfags yet...</p>
            </div>
        )
    }
}

export default connect()(Messages);