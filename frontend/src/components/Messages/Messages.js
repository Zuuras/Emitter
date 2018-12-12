import React, {Component} from 'react'
import './messages.scss'


export function openMessages() {
    document.getElementById('messages').style.display = "block";
}

class Messages extends Component {
    render() {
        return (
            <div className="container" id="messages">
                <div className="message">
                    <div className="message_avatar"/>
                    <div className="message_text-post">98 pirates on the worm from the desert</div>
                    <div className="message_post-date">Falala</div>
                </div>
                <p className="main-text">There is no oldfags yet...</p>
            </div>
        )
    }
}

export default Messages;