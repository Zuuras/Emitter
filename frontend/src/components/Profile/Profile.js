import React, {Component} from 'react'
import './profile.scss'
import {connect} from "react-redux";

class Profile extends Component {
    render() {
        return (
            <div className="profile-container">
                {/*<div className="profile_body">*/}
                    <div className="profile_avatar"/>
                    <div className="profile_settings">Settings</div>
                    <div className="profile_new-post">New post</div>
                    <div className="profile_new-quote">New Quote</div>
                    <div className="exit">Exit</div>
                </div>
            // </div>
        );
    }
}

export default connect()(Profile);