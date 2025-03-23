import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ isNavVisible, setIsNavVisible }) {

    // Para mostrar el menú en la hamburguesa
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="header">

            <div className="header__container">

                <a href="#" className="header__logo">
                    <img className="header__logo-img" src="/logo-Next-Read.svg" alt="Next Read Logo" />
                </a>

                <nav className="nav">

                    <div className="nav__toggle" id="nav-toggle" onClick={toggleNav}>
                        <FontAwesomeIcon icon={faBars} className="nav__icon" />
                    </div>

                    <ul className={`nav__list ${isNavVisible ? 'active' : ''}`}>
                        <li className="nav__item"><a href="#" className="nav__link">Inicio</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Pendientes</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Favoritos</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Acceso</a></li>
                    </ul>

                </nav>

            </div>

        </header>
    );

}

Header.propTypes = {
    isNavVisible: PropTypes.bool.isRequired, // isNavVisible debe ser un booleano y es requerido
    setIsNavVisible: PropTypes.func.isRequired, // setIsNavVisible debe ser una función y es requerido
};

export default Header;

