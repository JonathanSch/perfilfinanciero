import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const MainContainer = () => {
    const [utilizados, setUtilizados] = useState([])
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const siFunciona = [];
    const URL = "https://perfil-financiero.firebaseio.com/users.json";
    
    const handleUser = (e) => {
        setUser(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const createUser = () => {
        if (user && password) {

            if(utilizados.includes(user)) {
                alert("Usuario ya utilizado, usa otra por fa")
            } else {
                axios.post(URL, { user, password })
                .then(() => {
                    alert("Usuario creado");
                    history.push("/cuestionario");
                })
                .catch((error) => alert(error));
            }
        }
        else {
            alert("Tienes que llenar todas las casillas")
        }
    }

    useEffect(() => {
        axios.get(URL)
        .then((res) => {
            for (let i = Object.values(res.data).length - 1; i >= 0; i--) {
                const usuarioUnico = (Object.values(res.data)[i]);
                siFunciona.push(Object.values(usuarioUnico)[1]);
            }
            setUtilizados(siFunciona);
        })
        .catch((error) => console.log(error))
    }, []);

    return (
        <React.Fragment>
            <div className="form-group">
                <label >Usuario</label>
                <input type="text" onChange={handleUser} className="form-control" id="exampleInputEmail1" />
                <small className="form-text text-muted">Tiene que ser un usuario único</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePassword} />
            </div>

            <button type="submit" className="btn btn-primary" onClick={() => { createUser() }}>Crear Usuario</button>


        </React.Fragment>

    )
}

export default MainContainer
