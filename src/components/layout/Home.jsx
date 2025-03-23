import banner from '/banner-Next-Read.png';

function Home() {

    return (

        <section className="home__container">

            <div className="home__banner">

                <img className="home__banner-img" src={banner} alt="Banner de Next Read" />

            </div>

            <h2 className="home__title">¡Te damos la bienvenida a Next Read!</h2>
            <p className="home__text">Añade los libros que te llaman la atención, márcalos como leídos o favoritos y pasa a la
                siguiente lectura.</p>

        </section>
    );

}

export default Home;
