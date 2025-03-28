import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark, faHeart } from '@fortawesome/free-solid-svg-icons';

function Header({ isNavVisible, setIsNavVisible }) {

    const location = useLocation();

    // Para mostrar el menú en la hamburguesa
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="header">

            <div className="header__container">

                <Link to="/" className="header__logo">
                    <img className="header__logo-img" src="/logo-Next-Read.svg" alt="Next Read Logo" />
                </Link>

                <nav className="nav">

                    <div className="nav__toggle" id="nav-toggle" onClick={toggleNav}>
                        <FontAwesomeIcon icon={faBars} className="nav__icon" />
                    </div>

                    <ul className={`nav__list ${isNavVisible ? 'active' : ''}`}>

                        <li className="nav__item">
                            <Link to="/" className={`nav__link ${location.pathname === "/" ? "nav__link-active" : ""}`}>Inicio</Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/pendientes" className={`nav__link ${location.pathname === "/pendientes" ? "nav__link-active" : ""}`}>Pendientes  <FontAwesomeIcon icon={faBookmark} className="nav__btn" /></Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/favoritos" className={`nav__link ${location.pathname === "/favoritos" ? "nav__link-active" : ""}`}>Favoritos <FontAwesomeIcon icon={faHeart} className="nav__btn" /></Link>
                        </li>

                        <li className="nav__item">
                            <Link to="/acceso" className={`nav__link ${location.pathname === "/acceso" ? "nav__link-active" : ""}`}>Acceso</Link>
                        </li>

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

