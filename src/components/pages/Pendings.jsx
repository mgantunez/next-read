import { useState } from "react";

const Pendings = () => {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const addBook = () => {
        if (title && author) {
            setBooks([...books, { id: Date.now(), title, author, status: "pendiente", rating: 0 }]);
            setTitle("");
            setAuthor("");
        }
    };

    const updateStatus = (id, newStatus) => {
        setBooks(books.map(book => book.id === id ? { ...book, status: newStatus } : book));
    };

    const setRating = (id, rating) => {
        setBooks(books.map(book => book.id === id ? { ...book, rating } : book));
    };

    return (
        <div className="pendings">
            <h2 className="pendings__title">Lista de libros pendientes</h2>
            <div className="pendings__form">
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="pendings__input"
                />
                <input
                    type="text"
                    placeholder="Autor"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="pendings__input"
                />
                <button onClick={addBook} className="pendings__button">Añadir</button>
            </div>
            <ul className="pending__list">
                {books.map(book => (
                    <li key={book.id} className="pendings__item">
                        <span>{book.title} - {book.author}</span>
                        <select
                            value={book.status}
                            onChange={(e) => updateStatus(book.id, e.target.value)}
                            className="pendings__select"
                        >
                            <option value="pendiente">Pendiente</option>
                            <option value="en progreso">En progreso</option>
                            <option value="abandonado">Abandonado</option>
                            <option value="favorito">Favorito</option>
                        </select>
                        <div className="pendings__rating">
                            {[1, 2, 3, 4, 5].map(star => (
                                <span
                                    key={star}
                                    onClick={() => setRating(book.id, star)}
                                    className={star <= book.rating ? "star filled" : "star"}
                                    style={{ color: star <= book.rating ? "#d68e8e" : "gray" }}
                                >★</span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pendings;