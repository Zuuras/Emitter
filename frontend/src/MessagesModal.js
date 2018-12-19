import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MessagesModal.scss'

import ReactDOM from 'react-dom';

class MessagesModal extends Component {
    constructor(props) {
        super(props);
        this.page = props.page;
    }

    newMessageHandler = () => {
        this.page = 'newMessage';
        this.forceUpdate();
    }

    backToDefaultPage = () => {
        this.page = 'default';
        this.forceUpdate();
    }

    markAllAsRead = () => {
        alert('markAllAsRead');
    }

    render() {
        if(!this.props.show) {
            return null;
        }

        var page;

        if (this.page == 'newMessage') {
            page = (
                <div className="messages-modal__modal--page">
                    <div className="messages-modal__modal--header"> New message
                        <div className="messages-modal__modal--header-buttons">
                            <div className="messages-modal__modal--button messages-modal__modal--header-button" onClick={this.backToDefaultPage}>Back</div>
                            <div className="messages-modal__modal--button messages-modal__modal--header-button messages-modal__modal--close-button" onClick={this.props.onClose}>X</div>
                        </div>
                    </div>
                    <div className="messages-modal__modal--body">
                        <div>Please, enter user name:</div>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                </div>
            );
        } else {
            page = (
                <div className="messages-modal__modal--page">
                    <div className="messages-modal__modal--header"> Private Messages
                        <div className="messages-modal__modal--header-buttons">
                            <div className="messages-modal__modal--button messages-modal__modal--header-button messages-modal__modal--mark-all-as-read" onClick={this.markAllAsRead}>Mark all as read</div>
                            <div className="messages-modal__modal--button messages-modal__modal--header-button messages-modal__modal--message-button" onClick={this.newMessageHandler}>New message</div>
                            <div className="messages-modal__modal--button messages-modal__modal--header-button messages-modal__modal--close-button" onClick={this.props.onClose}>X</div>
                        </div>
                    </div>
                    <div className="messages-modal__modal--body">
                        <div>Send a message, get a message</div>
                        <div>
                            Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!
                        </div>
                        <button className="messages-modal__modal--button" onClick={this.newMessageHandler}>
                            Start a conversation
                        </button>
                    </div>
                </div>
            );
        }

        return ( <div className="messages-modal__overlay">
            <div className="messages-modal__modal">
                {page}
            </div>
        </div>);
    }
}

MessagesModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    page: PropTypes.string
};

export default MessagesModal;