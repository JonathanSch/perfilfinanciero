import React, { useState } from 'react'

const Entregable = () => {
    const [primer_valor, setPrimer_valor] = useState(null);
    const [segundo_valor, setSegundo_valor] = useState(null);
    const [tercer_valor, setTercer_valor] = useState(null);
    const [cuarto_valor, setCuarto_valor] = useState(null);
    const [quinto_valor, setQuinto_valor] = useState(null);
    const [sexto_valor, setSexto_valor] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [direccion, setDireccion] = useState(null);

    const handlePrimero = (e) => {
        setPrimer_valor(e.target.value);
    }
    const handleSegundo = (e) => {
        setSegundo_valor(e.target.value);
    }
    const handleTercero = (e) => {
        setTercer_valor(e.target.value);
    }
    const handleCuarto = (e) => {
        setCuarto_valor(e.target.value);
    }
    const handleQuinto = (e) => {
        setQuinto_valor(e.target.value);
    }
    const handleSexto = (e) => {
        setSexto_valor(e.target.value);
    }

    function calc(){
        const suma = parseInt(primer_valor) + parseInt(segundo_valor) + parseInt(tercer_valor) + parseInt(cuarto_valor) + parseInt(quinto_valor) + parseInt(sexto_valor);
        console.log(suma);

        
        if (suma >= 1 && suma <= 18) {
            setResultado('Tu Perfil es Corto Plazo Conservador');
            setDireccion("https://ibb.co/D53K4ym")

        } else if (suma > 18 && suma <= 25) {
            setResultado("Tu Perfil es Corto Plazo Especulativo");
            setDireccion("https://ibb.co/ftTrdW0")

        } else if (suma > 25 && suma <= 31) {
            setResultado("Tu Perfil es Corservador")
            setDireccion("https://ibb.co/f8HQ67d")

        } else if (suma > 31 && suma <= 42) {
            setResultado("Tu Perfil es Un Tanto Corservador")
            setDireccion("https://ibb.co/mDWs636")

        } else if (suma > 42 && suma <= 50) {
            setResultado("Tu Perfil es Moderado")
            setDireccion("https://ibb.co/0nY4RrX")

        } else if (suma > 50 && suma <= 54) {
            setResultado("Tu Perfil es Dinamico");
            setDireccion("https://ibb.co/KsXLF70")

        } else if (suma > 54) {
            setResultado("Tu Perfil es Tolerante")
            setDireccion("https://ibb.co/JKgvhPH")
        }
    }

    return (
        <React.Fragment>
            <div className="jumbotron">
                <div className="container">
                    <h1> Perfil de Riesgo de Inversión </h1>
                    <p> Hola! Antes de empezar a invertir lo ideal es conocer su tolerancia al riesgo, así sabrá cual es la forma óptima de calcular un portafolio de inversión </p>
                </div>
            </div>


            <div className="container">
                <div id="home" className="flex-center flex-column">



                    <article className="preguntas">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4"></div>
                            </div>
                        </div>

                        <section>
                            <label for="primera">Planeo disponer del rendimiento de mis inversiones en</label>
                            <select className="browser-default custom-select" name="" id="primera" onChange={handlePrimero}>
                                <option value="" disabled selected>Selecciona una opción </option>
                                <option value="1">Entre 1 a 3 años</option>
                                <option value="3">Entre 3 y 5 años</option>
                                <option value="7">Entre 6 y 10 años</option>
                                <option value="10">Dentro de 11 o más</option>
                            </select>
                        </section>

                        <section>
                            <label for="segunda">¿A partir de qué momento que decido empezar a retirar mis fondos?
    </label>
                            <select className="browser-default custom-select" name="" id="segunda " onChange={handleSegundo}>
                                <option value="" disabled selected>Selecciona una opción </option>
                                <option value="1">Menos de 2 años</option>
                                <option value="2">Entre 2 y 5 años</option>
                                <option value="6">Entre 6 y 10 años</option>
                                <option value="11">Dentro de 11 o más</option>
                            </select>
                        </section>

                        <section>
                            <label for="tercera">Mis conocimientos sobre inversión son</label>
                            <select className="browser-default custom-select" name="" id="tercera" onChange={handleTercero}>
                                <option value="" disabled selected>Selecciona una opción </option>
                                <option value="1">Nulos</option>
                                <option value="2">Limitados</option>
                                <option value="4">Buenos</option>
                                <option value="6">Muy buenos</option>
                            </select>
                        </section>


                        <section>
                            <label for="cuarta">Cuando invierto mi dinero, estoy me preocupo por</label>
                            <select className="browser-default custom-select" name="" id="cuarta" onChange={handleCuarto}>
                                <option value="" disabled selected>Selecciona una opción </option>
                                <option value="1">Las pérdidas de mi inversión</option>
                                <option value="4">Las pérdidas y ganancias de mi inversión</option>
                                <option value="8">Las ganancias de mi inversión</option>
                            </select>
                        </section>


                        <section>
                            <label for="quinta">¿Qué inversiones ha realizado anteriormente con más frecuencia?</label>
                            <select className="browser-default custom-select" name="" id="quinta" onChange={handleQuinto}>
                                <option value="" disabled selected>Selecciona una opción </option>
                                <option value="1">Ahorro ó Nada</option>
                                <option value="3">Bonos u otro de renta fija</option>
                                <option value="6">Acciones o fondos de Acciones</option>
                                <option value="8">Acciones y/o Fondos de acciones y renta fija</option>
                            </select>
                        </section>
                        <section>

                            <label for="sexta">Imagine que en los últimos 3 meses, el mercado de acciones en su conjunto perdió el 25% de
                            su valor. A su vez, una acción en particular que usted tenía también perdió el mísmo porcentaje. ¿Qué haría?
</label>
                            <select className="browser-default custom-select" name="" id="sexta" onChange={handleSexto}>
                                <option value="" disabled selected>Selecciona una opción </option>
                                <option value="1">Vender todas mis acciones</option>
                                <option value="3">Vender parte de mis acciones</option>
                                <option value="6">No hacer nada</option>
                                <option value="8">Comprar más acciones</option>
                            </select>
                        </section>
                        <br />

                        <a href={direccion} id="portafolio" >
                            <h2 className="text-center">{resultado}</h2>
                        </a>

                        <button className="btn btn-primary btn-lg" id="btn_calc" onClick={() => calc()}> Conocer Perfil </button>
                    </article>
                    <article>

                      


                    </article>
                </div>
            </div>


        </React.Fragment >













    )
}

export default Entregable
