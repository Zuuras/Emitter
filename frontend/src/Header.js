import React, {Component} from 'react'
import './Header.scss'
import MessagesModal from './MessagesModal.js';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state ={ isMessagesModalOpen: false};
    }
    openMessagesModal = () => {
        this.setState({
            isMessagesModalOpen: !this.state.isMessagesModalOpen
        })
    }

    render(){

        return(
            <div className="main-header">
                <div className="logo-head" >
                  <div className="wrap">
                    <a href="http://localhost:3000/" >Emitter_98
                    </a>

                    <div className="btn favorites">
                    </div>

                    <div className="btn notifications" >

                    </div>

                    <div className="btn messages" onClick={this.openMessagesModal}>
                    </div>

                    <div className="search">
                      <div className="search-icon">
                      </div>

                      <input  className="search-input" placeholder="Back to the future...">
                      </input>
                    </div>
                    </div>
                  <p className="phrase">&#9993; Luke i am your father ! &#9993;</p>
                    <div className="btn profile">
                        <p>OldMan228</p>
                        <div className="profile-img"/>
                    </div>
                </div>
                <div className="welcome">
                    Welcome to the 1998
                </div>
            <audio id="sound-link" preload="auto">
                <source src="audio/click.mp3" type="audio/mpeg"/>

            </audio>
                <MessagesModal page="default" show={this.state.isMessagesModalOpen} onClose={this.openMessagesModal}></MessagesModal>
            </div>

        );

    }

}
export default Header;
