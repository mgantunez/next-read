import headerLogo from '../../logo next read.svg';

function Header() {

    return (
        <header className="header">

            <div className="header__container">

                <a href="#" className="header__logo">
                    <img className="header__logo-img" src={headerLogo} alt="Next Read Logo" />
                </a>

                <nav className="nav">

                    <div className="nav__toggle" id="nav-toggle">
                        <i className="fa-solid fa-bars nav__icon"></i>
                    </div>

                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">Inicio</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Mis lecturas pendientes</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Favoritos</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Contacto</a></li>
                    </ul>

                </nav>

            </div>

        </header>
    );

}

export default Header;

