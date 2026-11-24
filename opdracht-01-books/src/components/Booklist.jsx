import { useState } from "react";
import BookCounter from "./BookCounter";

const Booklist = () => {
    const [books, setBooks] = useState([
    {id: 1, auteur: "J.K. Rowling", boek: "Harry Potter", cover: "/images/book-1.png"},
    {id: 2, auteur: "Elisabetta Dami", boek: "Geronimo Stilton", cover: "/images/book-2.png"},
    {id: 3, auteur: "Suzanne Collins", boek: "The hungergames", cover: "/images/book-3.png"}
  ]);

  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0)

  function verhoogTeller(){
    setAantalKeerGelezen(aantalKeerGelezen + 1)
  }

    return (
        <section>
            <BookCounter aantal={books.length}/>
            {books.map(book => (
                <article key={book.id}>
                    <h2>{book.boek}</h2>
                    <h3>{book.auteur}</h3>
                    <button onClick={verhoogTeller}>Keer gelezen: {aantalKeerGelezen}</button>
                    <img src={book.cover} alt="" />
                </article>
            ))}
        </section>
    );
}
 
export default Booklist;