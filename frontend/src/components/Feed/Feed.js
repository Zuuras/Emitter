import React, {Component} from 'react'
import './feed.scss'
import {connect} from "react-redux";


class Feed extends Component {
    render() {
        return (
            <div className="feed_container">
                <div className="feed_data">
                    <div className="feed_user-avatar"></div>
                    <div className="feed_user-name">@OldMan228</div>
                    <div className="feed_user-time"></div>
                </div>
                <div className="feed_post"></div>
                <div className="feed_back">
                    <div className="feed_back_left">
                        <div className="feed_like"></div>
                        <div className="feed_remit"></div>
                        <div className="feed_comment"></div>
                    </div>
                    <div className="feed_send"></div>
                </div>
            </div>
        )
    }
}


export default connect()(Feed)