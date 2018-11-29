import React, {Component} from 'react'
import './Header.scss'

class Header extends Component{
    render(){

        return(<div className="main-header">
                <div className="logo-head" >
                    <a href="http://localhost:3000/" >Emitter_98</a>
                    <div className="btn favorites">
                    </div>
                    <div className="btn notifications">
                    </div>
                    <div className="btn messages">
                    </div>
                </div>
                <div className="welcome">
                    Welcome to the 1998
                </div>
            <audio id="sound-link" preload="auto">
                <source src="audio/click.mp3" type="audio/mpeg"/>

            </audio>

            </div>

        );


    }

}
export default Header;
