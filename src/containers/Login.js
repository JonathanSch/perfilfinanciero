import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
const MainContainer = () => {
    const [utilizados, setUtilizados] = useState([])
    const [usuario, setUsuario] = useState(null);
    const [contrasena, setContrasena] = useState(null);

    let valor ;
    const siFunciona = [];
    
    let verificar = [];
    let incorrecto = false;
    const URL = "https://perfil-financiero.firebaseio.com/users.json";

    const handleUsuario = (e) => {
        setUsuario(e.target.value);
    }
    const handleContrasena = (e) => {
        setContrasena(e.target.value);
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
            .catch((error) => console.log(error));



    }, []);
    axios.get(URL)
        .then((res) => {
            console.log(Object.values(res.data))
            useRef.current = Object.values(res.data)


        })
        .catch((error) => console.log(error));


    console.log(useRef.current);
    const clicar = () => {
       valor = useRef.current;

        if (utilizados.includes(usuario)) {
            for (let i = 0; i <= utilizados.length; i++) {
                
                
                if (contrasena === valor[i].password && usuario === valor[i].user) {
                    alert("Hecho")
                }
               else if(contrasena !== valor[i].password && i === utilizados.length && usuario === valor[i].user) {
                   alert(valor[1].password)
               }
            }
            }
       
        
        else {
            alert("Usuario no existe");
        }
      
        
    }
    


// JSX
return (
    <div>

        <div className="Login">
            <div className="Login:before">
            </div>
        </div>
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-2">
                    <h3>Login</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your User *" onChange={handleUsuario} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Your Password *" onChange={handleContrasena} />
                        </div>
                        <div className="form-group">
                            <button onClick={() => clicar()}>Click</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    </div>



)
}

export default MainContainer;