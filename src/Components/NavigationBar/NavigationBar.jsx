import React from 'react'
import logo from '../../assets/Logo-cinecolombia.webp'
import { NavLink } from 'react-router-dom';
import './navigationBar.scss'
import BasicSelect from '../Formulario/Form';

const NavigationBar = () => {
  return (
    <nav className='navBar'>
        <section>
            <figure className='navBar__figure'>
                <img src={logo} alt="logo" />
            </figure>
            <NavLink to="/" className="navBar__link">
                Cartelera
            </NavLink>
        </section>
        <BasicSelect/>
        {/* <form className="navBar__search">
            <div>
                <label htmlFor="">Ubicación</label>
                <select name="ubicacion">
                    <option value="">Escoja una ubicación</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Cines Cercanos</label>
                <select name="cines">
                    <option value="">Escoja una ubicación</option>
                </select>
            </div>
            <div>
                <label htmlFor="">Fecha</label>
                <input type="date" />
            </div>
        </form> */}
    </nav>
  )
}

export default NavigationBar