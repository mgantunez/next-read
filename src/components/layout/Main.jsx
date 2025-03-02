import banner from '../../images/banner Next Read.png';

<main className="main">

    <section className="main__container">

        <div className="main__banner">

            <img className="main__banner-img" src={banner} alt="Banner de Next Read" />

        </div>

        <h2 className="main__title">¡Te damos la bienvenida a Next Read!</h2>
        <p className="main__text">Añade los libros que te llaman la atención, márcalos como leídos o favoritos y pasa a la
            siguiente lectura.</p>

    </section>

    <section className="novelties">

        <h2 className="novelties__title">Últimas novedades literarias</h2>

        <div className="novelties__container">



            <button className="novelties__arrow novelties__arrow--left">
                <i className="fa-solid fa-chevron-left"></i>
            </button>

            <ul className="novelties__list">

                <li className="novelties__item">
                    <img className="novelties__image" src="https://placehold.co/150x220" alt="Portada del libro" />
                    <h3 className="novelties__book-title">Título del libro</h3>
                    <p className="novelties__author">Autor del libro</p>
                    <button className="novelties__add-btn">
                        <i className="fa-solid fa-bookmark"></i>
                    </button>
                </li>

                <li className="novelties__item">
                    <img src="https://placehold.co/150x220" alt="Portada del libro" className="novelties__image" />
                    <h3 className="novelties__book-title">Título del libro</h3>
                    <p className="novelties__author">Autor del libro</p>
                    <button className="novelties__add-btn">
                        <i className="fa-solid fa-bookmark"></i>
                    </button>
                </li>

                <li className="novelties__item">
                    <img src="https://placehold.co/150x220" alt="Portada del libro" className="novelties__image" />
                    <h3 className="novelties__book-title">Título del libro</h3>
                    <p className="novelties__author">Autor del libro</p>
                    <button className="novelties__add-btn">
                        <i className="fa-solid fa-bookmark"></i>
                    </button>
                </li>
            </ul>

            <button className="novelties__arrow novelties__arrow--right">
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        </div>

    </section>


</main>
