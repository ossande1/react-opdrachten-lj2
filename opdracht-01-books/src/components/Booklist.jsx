import { useState } from "react";

const Booklist = () => {
    const [books, setBooks] = useState([
    {id: 1, auteur: "J.K. Rowling", boek: "Harry Potter", cover: "../public/images/book-1.png"},
    {id: 2, auteur: "Elisabetta Dami", boek: "Geronimo Stilton", cover: "../public/images/book-2.png"},
    {id: 3, auteur: "Suzanne Collins", boek: "The hungergames", cover: "../public/images/book-3.png"}
  ]);

    return (
        <section>
            {books.map(book => (
                <article key={book.id}>
                    <h2>{book.boek}</h2>
                    <h3>{book.auteur}</h3>
                    <img src={book.cover} alt="" />
                </article>
            ))}
        </section>
    );
}
 
export default Booklist;