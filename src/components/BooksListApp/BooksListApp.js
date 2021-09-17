import React from 'react';
import BookApp from '../BookApp/BookApp';

function BooksListApp() {
  const booksID = [42189891, 31256891, 18223031, 9600888, 24971845, 654875];

  return (
    <section id="books-page">
      <h2 id="books-header">Сентябрь горит, но мы не плачем! Подборка книг для уютной осени.</h2>
      <div id="books-container">
         {booksID.map(id => {
          return <BookApp bookid={id} />
         })}
      </div>
      <div id="books-buttons">
        <div className="lib-button"><a href="https://biblio.litres.ru" target="_blank" rel="noreferrer">Перейти в библиотеку</a></div>
        <div className="lib-button"><a href="https://biblio.litres.ru/libreg/1081039/" target="_blank" rel="noreferrer">Записаться в библиотеку</a></div>
      </div>
    </section>
  )    
};

export default BooksListApp;