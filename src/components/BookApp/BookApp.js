import React, { useState, useEffect } from 'react';
import fetchJsonp from 'fetch-jsonp';

function BookApp(props) {
  const { bookid } = props;
  const [booksData, setBooksData] = useState({});

  const link = `https://biblio.litres.ru/pages/biblio_book/?art=${bookid}&lfrom=2886435`
  const linkImg = `https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_415/${bookid}-pages-biblio-book-art-${bookid}.jpg`

  useEffect(() => {
    let apiRequest = `https://www.litres.ru/pages/get_vidget_json/?art=${bookid}`;
    fetchJsonp(apiRequest, { timeout: 10000 })
    .then(function(response) {
      return response.json()
    }).then(function(json) {
     setBooksData(
        {
          id: bookid,
          title: json.biblio_book[0].['name'],
          author: json.biblio_book[0].['s_author-name']
        }
      )
    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, []);

  return (
    <figure>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="image-container">
          <img src={linkImg} alt={booksData.title}/>
        </div>
        <figcaption>
          <p className="books-title">{booksData.title}</p>
          <p className="books-author">{booksData.author}</p>
        </figcaption>
      </a>
    </figure>
  )
}

export default BookApp;