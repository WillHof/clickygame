import React from "react";

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand mr-5" href="/">Reactful clicking</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active mr-5 ml-5">
                        <span className="navbar-text">
                            {props.guesscheck}
                        </span>
                    </li>
                </ul>
                <span className="navbar-text mr-5 ml-5">Current Score: {props.currentscore}</span>
            </div>
        </nav>
    )
}

export default Nav
