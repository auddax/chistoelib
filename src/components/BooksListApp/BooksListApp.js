import React, { useState, useEffect } from 'react';
import fetchJsonp from 'fetch-jsonp';
import BookApp from '../BookApp/BookApp';

function BooksListApp() {
  const booksID = [42189891, 31256891, 18223031, 9600888];
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    booksID.forEach(id => {
      let apiRequest = `https://www.litres.ru/pages/get_vidget_json/?art=${id}`;
      fetchJsonp(apiRequest, { timeout: 10000 })
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        booksData.push({
          id: id,
          title: json.biblio_book[0].['name'],
          author: json.biblio_book[0].['s_author-name']
        })
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
    })
    setBooksData([...booksData]);
  // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, []);
  
  return (
    <section id="books-page">
      <h2 id="books-header">Сентябрь горит, но мы не плачем! Подборка книг для уютной осени.</h2>
      <div id="books-container">
         {booksData.map(book => {
          return <BookApp bookid={book.id} title={book.title} author={book.author} />
         })}
      </div>
    </section>
  )    
};

export default BooksListApp;