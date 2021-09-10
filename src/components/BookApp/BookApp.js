
function BookApp(props) {
  const { bookid, title, author } = props;
  const link = `https://www.litres.ru/pages/biblio_book/?art=${bookid}&lfrom=2886435`
  const linkImg = `https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_415/${bookid}-pages-biblio-book-art-${bookid}.jpg`

  return (
    <figure>
      <a href={link} target="_blank" rel="noreferrer">
        <div className="image-container">
          <img src={linkImg} alt={title}/>
        </div>
        <figcaption>
          <p className="books-title">{title}</p>
          <p className="books-author">{author}</p>
        </figcaption>
      </a>
    </figure>
  )
}

export default BookApp;