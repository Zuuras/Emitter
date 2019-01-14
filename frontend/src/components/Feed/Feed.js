import React, {Component} from 'react'
import './feed.scss'
import {connect} from "react-redux";


class Feed extends Component {
    render() {
        return (
            <div className="feed_container">
                <div className="feed_data">
                    <div className="feed_user-avatar"/>
                    <div className="feed_user-name">@OldMan228</div>
                    <div className="feed_user-time">XX.XX.XXXX</div>
                </div>
                <div className="feed_post">
                </div>
                <div className="feed_back">
                        <div className="feed_back-like"/>
                        <div className="feed_back-remit"/>
                        <div className="feed_back-comment"/>
                </div>
            </div>
        )
    }
}


export default connect()(Feed)