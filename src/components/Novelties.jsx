import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Novelties() {
    const [books, setBooks] = useState([]);
    const [currentOffset, setCurrentOffset] = useState(0); // Offset inicia en 0 para empezar desde el primer libro
    const [totalBooks, setTotalBooks] = useState(0); // Total de libros disponibles 
    const limit = 3; // Limite de libros por página

    const fetchBooks = async () => {
        try {
            const response = await fetch(`https://openlibrary.org/search.json?q=author:Chimamanda+Ngozi+Adichie&lan=es&limit=${limit}&offset=${currentOffset}`);
            const data = await response.json();
            setBooks(data.docs);
            setTotalBooks(Math.floor(data.numFound - limit)); // Establecer el total de libros encontrados
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, [currentOffset]); // Vuelve a llamar a la API cada vez que cambia el offset

    // Maneja el clic de la flecha izquierda

    const handlePreviousPage = () => {

        if (currentOffset > 0) {
            setCurrentOffset(currentOffset - limit);
        } else if (currentOffset === 0 && totalBooks > 0) {
            // Si estamos en el primer conjunto de libros, ir al último conjunto disponible
            setCurrentOffset(totalBooks); // Última página
        }
    };

    // Maneja el clic de la flecha derecha

    const handleNextPage = () => {

        if (currentOffset + limit < totalBooks) {
            // Si no hemos llegado al final de los libros, aumenta el offset
            setCurrentOffset(currentOffset + limit);
        } else {
            // Si estamos en la última página, vuelve al principio
            setCurrentOffset(0); // Reinicia la paginación
        }
    };

    return (
        <section className="novelties">

            <h2 className="novelties__title">Esta semana te recomendamos a Chimamanda Ngozi</h2>

            <div className="novelties__container">

                {/* Botón de flecha izquierda */}
                <button
                    className="novelties__arrow novelties__arrow--left"
                    onClick={handlePreviousPage}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                <ul className="novelties__list">
                    {books.length > 0 ? (
                        books.map((book, index) => (
                            <li className="novelties__item" key={index}>
                                <img
                                    className="novelties__image"
                                    src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "https://placehold.co/150x220"}
                                    alt={`Portada del libro: ${book.title}`}
                                />
                                <h3 className="novelties__book-title">{book.title}</h3>
                                <p className="novelties__author">{book.author_name ? book.author_name.join(", ") : "Autor desconocido"}</p>
                                <button className="novelties__add-btn">
                                    <FontAwesomeIcon icon={faBookmark} />
                                </button>
                            </li>
                        ))
                    ) : (
                        <p>Cargando libros...</p>
                    )}
                </ul>

                {/* Botón de flecha derecha */}
                <button
                    className="novelties__arrow novelties__arrow--right"
                    onClick={handleNextPage}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>

            </div>
        </section>
    );
}

export default Novelties;
