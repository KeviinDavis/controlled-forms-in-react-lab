import { useState } from 'react';

function Bookshelf() {
  // State for books and form inputs
  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
  ]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });

  // Handles input changes dynamically
  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setNewBook((prev) => ({
      ...prev, // Spread the previous fields
      [name]: value, 
    }));
  };

  // Handles form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]); 
      setNewBook({ title: '', author: '' }); 
    }
  };

  return (
    <div className="bookshelfDiv">
      <h1>My Bookshelf</h1>
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title" 
            placeholder="Title"
            value={newBook.title}
            onChange={handleInputChange} 
          />
          <input
            type="text"
            name="author" 
            placeholder="Author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookshelf;
