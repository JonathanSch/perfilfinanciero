import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import inicio from '../images/Finanzas.png';







const MainContainer = () => {

    // JSX
    return (
        <div>
            <body>
                <div className="Login">
                    <div className="Login:before">
                    </div>
                </div>
                <Navbar />
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-6 login-form-2">
                            <h3>Login</h3>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your User *" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Your Password *" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btnSubmit" value="Login" />
                                </div>
                                <div className="form-group">
                                    <a href="#" className="ForgetPwd" value="Login">Forget Password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        </div>



    )
}

export default MainContainer;