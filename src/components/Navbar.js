import React from 'react';
import Team2 from '../images/Team2.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (

        <div class="fixed-top">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <h5 class="text-white h4">Collapsed content</h5>
                    <span class="text-muted">Toggleable via the navbar brand.</span>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img src={Team2} width="60" height="60" className="d-inline-block align-center" alt="" loading="lazy"></img>
                 Team 2
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>





    )
}



export default Navbar;



