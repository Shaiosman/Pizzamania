import React from 'react';
import './Navbar.css';
const Navbar =({title="Pizzamenia"}) => {
    return(
        <nav className="navbar navbar-default navbar-me">
            <div className="container-fluid">
                {/* Brand and toggle get grouped for better mobile display  */}
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#Home">{title}</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#AboutPizza">About Pizza</a></li>
                        <li><a href="#PizzaTypes">Pizza Types</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;