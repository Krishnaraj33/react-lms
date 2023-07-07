import React, { useState, useEffect } from 'react';
import './styles/profile.css';
const Profile = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to fetch books data
    setTimeout(() => {
      const dummyBooks = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        title: `Book ${index + 1}`,
        price: (Math.random() * 50).toFixed(2),
      }));
      setBooks(dummyBooks);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAddToCart = (book) => {
    console.log(`Added book "${book.title}" to cart.`);
    // Add your cart functionality here
  };

  return (
    <div>
      <h2>Welcome to your Profile</h2>
      <h3>Book List</h3>
      <div className="book-list">
        {loading ? (
          <p>Loading books...</p>
        ) : (
          books.map((book) => (
            <div className="book-card" key={book.id}>
              <h4>{book.title}</h4>
              <p>Price: ${book.price}</p>
              <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
