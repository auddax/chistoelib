import React from 'react';
import './Event.css';
import clockIcon from './clock-icon.svg';
import calendarIcon from './calendar-icon.svg';
import manIcon from './man-icon.svg';

function Event(props) {
  const { event, date } = props;

  return (<div className="event">
            <div className="event-date">
              <div className="event-date-month">{date.format('MMM')}</div>
              <div className="event-date-day">{date.format('D')}</div>
            </div>
            <div className="event-description">
              <div className="event-text">{event.text}</div>
              <div className="event-details">
                <div className="event-details-time"><img src={clockIcon} alt=""/>{event.time}</div>
                <div className="event-details-weekday"><img src={calendarIcon} alt=""/>{date.format('dddd')}</div>
                <div className="event-details-participants"><img src={manIcon} alt=""/>{event.participants}</div>
              </div>
            </div> 
          </div>)
}

export default Event;