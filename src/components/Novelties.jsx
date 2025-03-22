import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Novelties() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("https://openlibrary.org/search.json?q=author:Chimamanda+Ngozi+Adichie&lan=es&limit=3");
                const data = await response.json();
                setBooks(data.docs);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <section className="novelties">

            <h2 className="novelties__title">Esta semana te recomendamos a Chimamanda Ngozi</h2>

            <div className="novelties__container">

                <button className="novelties__arrow novelties__arrow--left">
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

                <button className="novelties__arrow novelties__arrow--right">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </section>
    );
}

export default Novelties;
