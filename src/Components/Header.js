import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Logo from '../images/logo.jpeg'
class Header extends Component
{
    render(){
        return <div className="Header">
            <Link to="/"><img className="logo" src={Logo}></img></Link>
            
        </div>
    }

}
export default Header;