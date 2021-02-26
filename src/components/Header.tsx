import React from 'react';
import Icon from '../assets/images/favicon.png';


const Header = () => {

    return(
        <div className="header">
            <img className="icon" src={Icon} alt="ck"/>
            <div className="chriskim">
                <div><b>Chris</b>Kim</div>
            </div>
            <div className="image-links">
                <a href="https://ikim1991.github.io/portfolio/" target="_blank"><i className="fa fa-globe"></i></a>
                <a href="https://github.com/ikim1991/" target="_blank"><i className="fa fa-github"></i></a>
                <a href="https://linkedin.com/in/ikim91/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                <a href="https://instagram.com/ikim91/" target="_blank"><i className="fa fa-instagram"></i></a>
            </div>
        </div>
    )
}

export default Header;