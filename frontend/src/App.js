import React, {Component} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import {connect} from "react-redux";


class App extends Component {
    render() {
        console.log('App', this.state);
        var state = {
            showed: this.props.showedMessage
        }
        return (

            <div className="App">
                <Header/>
                {state.showed && <Messages/>}
            </div>
        );
    }
}

export default connect()(App);
