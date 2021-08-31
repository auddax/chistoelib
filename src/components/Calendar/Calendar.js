import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
import buildCalendar from './build'
import './Calendar.css';

function Calendar(props) {

  moment.updateLocale("ru", { week: {
    dow: 1, // First day of week is Monday
    doy: 4  // First week of year must contain 4 January (7 + 1 - 4)
  }});

  const [calendar, setCalendar] = useState([]);
  const { value, setValue } = props;

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  function currMonthName() {
    return value.format('MMMM');
  }

  function prevMonth() {
    return value.clone().subtract(1, 'month');
  }

  function nextMonth() {
    return value.clone().add(1, 'month');
  }

  return (
    <div className="calendar-app">
      <div className="calendar-app-header">
        <div className="arrow" onClick={() => setValue(prevMonth())}>{ String.fromCharCode(60) }</div>
        <div className="calendar-app-month">{ currMonthName() }</div>
        <div className="arrow" onClick={() => setValue(nextMonth())}>{ String.fromCharCode(62) }</div>
      </div>
      <div className="calendar-app-body">
        <div className="calendar-app-days">
          {
            ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((d) => (<div className='week'>{d}</div>))
          }
        </div>
        {
          calendar.map(week => 
            <div>
              {
                week.map(day => 
                  <div className="day" onClick = { () => setValue(day) }>
                    <div className={ value.isSame(day, 'day') ? "selected" : "no-selected" }>
                      { day.format('D') }
                    </div>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Calendar;
