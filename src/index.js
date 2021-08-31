import React from 'react';
import ReactDOM from 'react-dom';
import EventsApp from './components/EventsApp/EventsApp';
import MainApp from './components/MainApp/MainApp';


ReactDOM.render(
  <div>
    <EventsApp />
    <section id="books-page">
      <h2 id="books-header">Самые атмосферные книги для летнего чтения 2021</h2>
      <div id="books-container">
        <figure class="image-container">
          <img src="./resources/img/books-dandelion-wine.jpg" alt="Вино из одуванчиков"/>
          <figcaption>
            <p class="books-title">«Вино из одуванчиков»</p>
            <p class="books-author">Рэй Брэдбери</p>
          </figcaption>
        </figure>
        <figure class="image-container">
          <img src="./resources/img/books-bonjour-tristesse.jpg" alt="Здравствуй, грусть"/>
          <figcaption>
            <p class="books-title">«Здравствуй, грусть»</p>
            <p class="books-author">Франсуаза Саган</p>
          </figcaption>
        </figure>
        <figure class="image-container">
          <img src="./resources/img/books-tender-is-the-night.jpg" alt="Ночь нежна"/>
          <figcaption>
            <p class="books-title">«Ночь нежна»</p>
            <p class="books-author">Френсис Скотт Фицджеральд</p>
          </figcaption>
        </figure>
        <figure class="image-container">
          <img src="./resources/img/books-the-door-into-summer.jpg" alt="Дверь в лето"/>
          <figcaption>
            <p class="books-title">«Дверь в лето»</p>
            <p class="books-author">Роберт Хайлайн</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section id="services-page">
      <div id="services-container">

        <div class="services-block">
          <figure class="image-container">
            <img src="./resources/img/services-printer-img.jpg" alt="Принтер"/>
          </figure>
        </div>

        <div class="services-block">
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

        <div class="services-block">
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

        <div class="services-block">
          <figure class="image-container">
            <img src="./resources/img/services-internet-img.jpg" alt="Ноутбук"/>
          </figure>
        </div>

        <div class="services-block">
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

        <div class="services-block">
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2199.900499759344!2d42.996814215961194!3d56.53835678077076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414e0449e2fe7001%3A0x3ca2bb13c0672971!2z0YPQuy4g0JvQtdC90LjQvdCwLCA10JAsINCn0LjRgdGC0L7QtSwg0J3QuNC20LXQs9C-0YDQvtC00YHQutCw0Y8g0L7QsdC7LiwgNjA2NTU5!5e0!3m2!1sru!2sru!4v1628783407092!5m2!1sru!2sru"  allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div id="about-info">
          <div class="about-address">
            <h2>Адрес библиотеки</h2>
            <div class="about-address-container">
              <img src="./resources/img/map-point-icon.svg"/>
              <p>Нижегородская область, село Чистое, ул. Ленина, д. 5А</p>
            </div>
            <div class="about-address-container">
              <img src="./resources/img/mail-icon.svg"/>
              <p><a href="mailto:mail@chistoelib.ru">mail@chistoelib.ru</a></p>
            </div>
          </div>
          <div class="about-address">
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