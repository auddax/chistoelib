import React from 'react';
import BookApp from '../BookApp/BookApp';

function BooksListApp() {
  const booksID = [67722378, 67722893, 67841670, 67788045, 67729266];

  return (
    <section id="books-page">
      <h2 id="books-header">Лучшие книги августа 2022</h2>
      <div id="books-container">
         {booksID.map(id => {
          return <BookApp bookid={id} />
         })}
      </div>
      <div id="books-buttons">
        <a href="https://biblio.litres.ru" target="_blank" rel="noreferrer"><div className="lib-button">Перейти в библиотеку</div></a>
        <a href="https://biblio.litres.ru/libreg/1081039/" target="_blank" rel="noreferrer"><div className="lib-button">Записаться в библиотеку</div></a>
      </div>
    </section>
  )    
};

export default BooksListApp;