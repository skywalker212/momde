import React from 'react';

export class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between d-flex">
                <a className="navbar-brand" href="">Navbar</a>
                <p className="nav-item">My Own MarkDown Editor</p>
            </nav>
        );
    }
}

export default Navbar;