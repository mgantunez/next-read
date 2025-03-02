import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Novelties() {
    return (
        < section className="novelties" >

            <h2 className="novelties__title">Últimas novedades literarias</h2>

            <div className="novelties__container">

                <button className="novelties__arrow novelties__arrow--left">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <ul className="novelties__list">

                    <li className="novelties__item">
                        <img className="novelties__image" src="https://placehold.co/150x220" alt="Portada del libro" />
                        <h3 className="novelties__book-title">Título del libro</h3>
                        <p className="novelties__author">Autor del libro</p>
                        <button className="novelties__add-btn">
                            <FontAwesomeIcon icon={faBookmark} />
                        </button>
                    </li>

                    <li className="novelties__item">
                        <img src="https://placehold.co/150x220" alt="Portada del libro" className="novelties__image" />
                        <h3 className="novelties__book-title">Título del libro</h3>
                        <p className="novelties__author">Autor del libro</p>
                        <button className="novelties__add-btn">
                            <FontAwesomeIcon icon={faBookmark} />
                        </button>
                    </li>

                    <li className="novelties__item">
                        <img src="https://placehold.co/150x220" alt="Portada del libro" className="novelties__image" />
                        <h3 className="novelties__book-title">Título del libro</h3>
                        <p className="novelties__author">Autor del libro</p>
                        <button className="novelties__add-btn">
                            <FontAwesomeIcon icon={faBookmark} />
                        </button>
                    </li>
                </ul>

                <button className="novelties__arrow novelties__arrow--right">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

        </section>

    );

}

export default Novelties;