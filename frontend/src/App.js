import React, {Component} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import Feed from "./components/Feed/Feed";
import Notifications from "./components/Notifications/Notifications";


class App extends Component {
    state = {
        showedMessages: false,
        showedNotifications: false
    }

    showedToggle = () => {
        this.setState({
            showedMessages: !this.state.showedMessages

        })
    }
    showNot = () => {
        this.setState({
            showedNotifications: !this.state.showedNotifications
        })
    }
    render() {
        return (

            <div className="App">
                <Header toggle={this.showedToggle} notif={this.showNot}/>
                {this.state.showedMessages && <Messages />}
                {this.state.showedNotifications && <Notifications/>}
                <Feed/>

            </div>
        );
    }
}

export default (App);