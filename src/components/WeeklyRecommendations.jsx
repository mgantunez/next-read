import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ClockLoader } from 'react-spinners';

import nonAvailableImage from '../images/Imagen-no-disponible.png';

function WeeklyRecommendations() {
    const [books, setBooks] = useState([]);
    const [currentOffset, setCurrentOffset] = useState(0); // Offset para manejar la paginación
    const [totalBooks, setTotalBooks] = useState(0); // Total de libros disponibles
    const [isLoading, setIsLoading] = useState(true); // Estado para saber si está cargando
    const limit = 3; // Limitar a 3 libros por página

    // Función para cargar los libros de la API
    useEffect(() => {
        const fetchBooks = async () => {
            setIsLoading(true); // Iniciar carga de libros
            try {
                const response = await fetch(`https://openlibrary.org/trending/weekly.json`);
                const data = await response.json();

                setBooks(data.works.slice(currentOffset, currentOffset + limit)); // Obtener solo los libros para la página actual
                setTotalBooks(Math.floor(data.works.length - limit)); // Total de libros encontrados
            } catch (error) {
                console.error("Error fetching books:", error);
            } finally {
                setIsLoading(false); // Finaliza la carga de libros
            }
        };

        fetchBooks(); // Llamar la función para obtener los datos
    }, [currentOffset]); // Ejecutar cada vez que el offset cambie

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
            <h2 className="novelties__title">Open Library: libros en tendencia esta semana</h2>

            <div className="novelties__container">

                {/* Botón de flecha izquierda */}
                <button
                    className="novelties__arrow novelties__arrow--left"
                    onClick={handlePreviousPage}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>

                {/* Mostrar el spinner si está cargando */}
                {isLoading ?
                    (
                        <div className="novelties__spinner">
                            <ClockLoader
                                color="#d68e8e"
                                size={75}
                            />
                        </div>
                    )
                    :
                    (
                        <ul className="novelties__list">
                            {books.length > 0 ? (
                                books.map((book, index) => (
                                    <li className="novelties__item" key={index}>
                                        <img
                                            className="novelties__image"
                                            src={book.cover_i ?
                                                `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                                                :
                                                nonAvailableImage}
                                            alt={book.cover_i ?
                                                `Portada del libro: ${book.title}`
                                                :
                                                "Imagen no disponible"}
                                        />

                                        <h3 className="novelties__book-title">{book.title}</h3>
                                        <p className="novelties__author">{book.author_name ? book.author_name.join(", ") : "Autor desconocido"}</p>
                                        <div className="novelties__btns">

                                            <button className="novelties__btn">
                                                <FontAwesomeIcon icon={faBookmark} />
                                            </button>

                                            <button className="novelties__btn">
                                                <FontAwesomeIcon icon={faHeart} />
                                            </button>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <p>No se encontraron libros</p>
                            )}
                        </ul>
                    )}



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

export default WeeklyRecommendations;
