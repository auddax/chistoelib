import moment from 'moment';
import preloader from './preloader.svg'


function MainApp(props) {
  const { summary, eventDate, setDate } = props;

  return(
      <div id="main-page-content">
        {typeof summary !== 'undefined' ? (
          <div id="content-container">
            <h1 id="content-date">{moment(eventDate).format('D MMMM')}</h1>
            <a href="#events-page" onClick = { () => setDate(moment(eventDate)) } ><h1 id="content-event">{summary.split('|')[0]}</h1></a>
            <p id="content-text">{summary.split('|')[1]}</p>
          </div>) : (
          <img src={preloader} alt=""/>)
        }
      </div>
    )
}

export default MainApp;