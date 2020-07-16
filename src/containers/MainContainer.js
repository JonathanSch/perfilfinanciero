import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MainContainer = () => {

    const URL = "https://perfil-financiero.firebaseio.com/users.json";

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const createUser = () => {
        if (user && password) {
            axios.post(URL, { user, password })
                .then(() => {
                    alert("Usuario creado");
                    window.location.reload(true);
                })
                .catch((error) => alert(error));
        }
        else {
            alert("Tienes que llenar todas las casillas")
        }

    }

    return (
        <React.Fragment>
            <form>
            <div className="form-group">
                <label >Usuario</label>
                <input type="email" onChange={handleUser} className="form-control" id="exampleInputEmail1" />
                <small className="form-text text-muted">Tiene que ser un usuario único</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePassword} />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={() => { createUser() }}>Crear Usuario</button>
        </form>
    
        </React.Fragment>
        
    )
}

export default MainContainer
