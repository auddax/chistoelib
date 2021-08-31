import React, { useState, useEffect } from 'react';
import moment from 'moment';
import loader from './preloader.svg'


function MainApp(props) {
  const { summary, date } = props;

  return(
      <div id="main-page-content">
        {typeof summary !== 'undefined' ? (
          <div id="content-container">
            <h1 id="content-date">{moment(date).format('D MMMM')}</h1>
            <a href="#events-page"><h1 id="content-event">«{summary}»</h1></a>
          </div>) : (
          <img src={loader} alt=""/>)
        }
      </div>
    )
}

export default MainApp;