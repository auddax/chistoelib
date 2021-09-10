import React from 'react';
import BookApp from '../BookApp/BookApp';

function BooksListApp() {
  const booksID = [42189891, 31256891, 18223031, 9600888];

  return (
    <section id="books-page">
      <h2 id="books-header">Сентябрь горит, но мы не плачем! Подборка книг для уютной осени.</h2>
      <div id="books-container">
         {booksID.map(id => {
          return <BookApp bookid={id} />
         })}
      </div>
    </section>
  )    
};

export default BooksListApp;