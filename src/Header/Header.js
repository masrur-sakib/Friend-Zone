import React from 'react';
import logo from "../Images/logo.png"
import "./Header.css"

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light header">
            <a class="navbar-brand logo" href="#"><img src={logo} alt="" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Friends</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Settings</a>
                    </li>
                </ul>
            </div>
        </nav>

        // <nav class="navbar navbar-expand-lg navbar-light header">
        //     <a class="navbar-brand logo" href="#"><img src={logo} alt="" /></a>
        //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //         <span class="navbar-toggler-icon"></span>
        //     </button>
        //     <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
        //         <div class="navbar-nav">
        //             <a class="nav-item nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        //             <a class="nav-item nav-link" href="#">Friends</a>
        //             <a class="nav-item nav-link" href="#">Settings</a>
        //         </div>
        //     </div>
        // </nav>


        // <div className="row header">
        //     <div className="col-sm-4 logo">
        //         <img src={logo} alt="" />
        //     </div>
        //     <div className="col-sm-8 menu">
        //         <nav>
        //             <a href="/home">Home</a>
        //             <a href="/friends">Friends</a>
        //             <a href="/settings">Settings</a>
        //         </nav>
        //     </div>
        // </div>
    );
};

export default Header;