/* global gapi */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import './EventsApp.css';
import Calendar from '../Calendar/Calendar';
import Event from '../Event/Event';
import MainApp from '../MainApp/MainApp';
import { CALENDAR_ID, DISCOVERY_DOCS } from "./config.js";


function EventsApp() {

  const [date, setDate] = useState(moment());
  const [comingEvent, setComingEvent] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: process.env.REACT_APP_API_KEY,
        discoveryDocs: DISCOVERY_DOCS
      }).then(function () {
        return gapi.client.calendar.events.list({
          'calendarId': CALENDAR_ID,
          'timeMin': date.toISOString(),
          'timeMax': (date.clone().add(10, 'day')).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        });   
      }).then(function(response) {
        let events = response.result.items;
        let allEvents = [];

        if (events.length > 0) {
          for (let i = 0; i < events.length; i++) {
            let event = {
                date: events[i].start.dateTime,
                time: moment(events[i].start.dateTime).format('HH:mm'),
                text: events[i].summary,
                participants: events[i].description
              };  
            allEvents.push(event);
          }
        return allEvents;
        } else {
          return [];
        }
    }, function(reason) {
      console.log(reason);
    }).then((allEvents) => {
      allEvents = allEvents.filter(event => moment(event.date).isAfter(moment()))
      setComingEvent(allEvents[0]);
    })
  };
    gapi.load('client', start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  useEffect(() => {
    function view() {
      gapi.client.init({
        apiKey:process.env.REACT_APP_API_KEY,
        discoveryDocs: DISCOVERY_DOCS
      }).then(function () {
        return gapi.client.calendar.events.list({
          'calendarId': CALENDAR_ID,
          'timeMin': (date.clone().subtract(1, 'day')).toISOString(),
          'timeMax': (date.clone().add(1, 'day')).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        });   
      }).then(function(response) {
        let events = response.result.items;
        let allEvents = [];

        if (events.length > 0) {
          for (let i = 0; i < events.length; i++) {
            let event = {
                date: events[i].start.dateTime,
                time: moment(events[i].start.dateTime).format('HH:mm'),
                text: events[i].summary,
                participants: events[i].description
              };  
            allEvents.push(event);
          }
        return allEvents;
        } else {
          return [];
        }
    }, function(reason) {
      console.log(reason);
    }).then((allEvents) => {
      allEvents = allEvents.filter(event => date.isSame(moment(event.date), 'day'))
      setEvents(allEvents);
    })
  };
    gapi.load('client', view);
  },[date]);


  return(
    <div id="app">

      <section id="main-page">
        <MainApp 
          summary={comingEvent.text} 
          date={comingEvent.date} 
        />
      </section>

      <section id="events-page">
        <div id="events-app">
          <div id="calendar">
            <Calendar 
              value={date}
              setValue={setDate}
            />
          </div>
          <div id="events">
            {events.map((event) => (
              <Event 
                event={event}
                date={date}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default EventsApp;