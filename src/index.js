import React from 'react';
import ReactDOM from 'react-dom';
import EventsApp from './components/EventsApp/EventsApp';
import BooksListApp from './components/BooksListApp/BooksListApp';

ReactDOM.render(
  <div>
    <EventsApp />
    <BooksListApp />

    <section id="services-page">
      <div id="services-container">

        <div className="services-block">
          <figure className="image-container">
            <img src="./resources/img/services-printer-img.jpg" alt="Принтер"/>
          </figure>
        </div>

        <div className="services-block">
          <table>
            <thead>
              <tr>
                <td>
                  <h2>Распечатка на принтере</h2>
                </td>
                <td></td>
              </tr>
            </thead>
            <tr>
              <td>1 страница на лазерном принтере формат А4</td>
              <td>5 руб.</td>
            </tr>
            <tr>
              <td>1 страница на струйном цветном  принтере формат А4</td>
              <td>10 руб.</td>
            </tr>
            <tr>
              <td>1 страница на струйном цветном  принтере формат А3</td>
              <td>20 руб.</td>
            </tr>
            <tr>
              <td>1 страница на цветном  фотопринтере формат 10×15</td>
              <td>7 руб.</td>
            </tr>
            <tr>
              <td>1 страница на цветном  фотопринтере формат A5</td>
              <td>15 руб.</td>
            </tr>
            <tr>
              <td>1 страница на цветном  фотопринтере формат A4</td>
              <td>30 руб.</td>
            </tr>
            <tr>
              <td>1 страница на цветном  фотопринтере формат A3</td>
              <td>80 руб.</td>
            </tr>
          </table>
        </div>

        <div className="services-block">
          <table>
            <thead>
              <tr>
                <td>
                  <h2>Ксерокопирование</h2>
                </td>
                <td></td>
              </tr>
            </thead>
            <tr>
              <td>1 страница формат А4</td>
              <td>5 руб.</td>
            </tr>
            <tr>
              <td>1 лист двусторонней печати формат А4</td>
              <td>9 руб.</td>
            </tr>
          </table>
        </div>

        <div className="services-block">
          <figure className="image-container">
            <img src="./resources/img/services-internet-img.jpg" alt="Ноутбук"/>
          </figure>
        </div>

        <div className="services-block">
          <table>
            <thead>
              <tr>
                <td>
                  <h2>Сканирование текста</h2>
                </td>
                <td></td>
              </tr>
            </thead>
            <tr>
              <td>1 страница формат А4</td>
              <td>5 руб.</td>
            </tr>
          </table>
        </div>

        <div className="services-block">
          <table>
            <thead>
              <tr>
                <td>
                  <h2>Доступ в Интернет</h2>
                </td>
                <td>80 руб/час</td>
              </tr>
            </thead>
            <tr>
              <td>Для льготных категорий граждан</td>
              <td>50 руб/час</td>
            </tr>
          </table>
        </div>
  
      </div>
    </section>
 
    <section id="about-page">
      <div id="about-container">
        <div id="about-map">
          <iframe title="Google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1199.4976471420036!2d42.999374645958966!3d56.53856454519538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd8eaac233a5b6abc!2z0KfQuNGB0YLQvtCy0YHQutCw0Y8g0YHQtdC70YzRgdC60LDRjyDQsdC40LHQu9C40L7RgtC10LrQsA!5e0!3m2!1sru!2sru!4v1631111303799!5m2!1sru!2sru"  allowFullScreen="" loading="lazy"></iframe>
        </div>
        <div id="about-info">
          <div className="about-address">
            <h2>Адрес библиотеки</h2>
            <div className="about-address-container">
              <img src="./resources/img/map-point-icon.svg" alt=""/>
              <p>Нижегородская область, село Чистое, ул. Ленина, д. 5А</p>
            </div>
            <div className="about-address-container">
              <img src="./resources/img/mail-icon.svg" alt=""/>
              <p><a href="mailto:mail@chistoelib.ru">mail@chistoelib.ru</a></p>
            </div>
          </div>
          <div className="about-address">
            <h2>Часы работы</h2>
            <table>
              <tr>
                <td>Пн</td>
                <td>12.00 - 18.00</td>
              </tr>
              <tr>
                <td>Вт</td>
                <td>12.00 - 18.00</td>
              </tr>
              <tr>
                <td>Ср</td>
                <td>12.00 - 18.00</td>
              </tr>
              <tr>
                <td>Чт</td>
                <td>12.00 - 18.00</td>
              </tr>
              <tr>
                <td>Пт</td>
                <td>12.00 - 18.00</td>
              </tr>
              <tr>
                <td>Сб</td>
                <td>Выходной</td>
              </tr>
              <tr>
                <td>Вс</td>
                <td>12.00 - 18.00</td>
              </tr>
            </table>  
          </div>
        </div>
      </div>
    </section>
  </div>,
  document.getElementById('root')
);