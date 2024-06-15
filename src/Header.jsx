import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav>
                <ul className="navHeader">
                    <li className="linkHeader"><a className="lolHeader" href="/">Home</a></li>
                    <li className="linkHeader" ><a className="lolHeader" href="/about">About</a></li>
                    <li className="linkHeader" ><a className="lolHeader" href="/services">Services</a></li>
                    <li className="linkHeader" ><a className="lolHeader" href="/contact">Contact</a></li>
                    <li className="linkHeader" ><a className="lolHeader" href="/contact">Career</a></li>
                    <li className="linkHeader" ><a className="lolHeader" href="/contact">Manual</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header