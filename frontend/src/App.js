import React, {Component} from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";


class App extends Component {
    state = {
        showed: false
    }

    showedToggle = () => {
        this.setState({
            showed: !this.state.showed
        })
    }
    render() {
        // console.log('App', this.props);
        return (

            <div className="App">
                <Header toggle={this.showedToggle} />
                {this.state.showed && <Messages />}
            </div>
        );
    }
}

export default (App);
