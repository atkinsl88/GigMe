import React from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

// import '@fullcalendar/core/main.css';
// import '@fullcalendar/daygrid/main.css';

class GigCalendar extends React.Component {
  render(){
    
    const events = [
      { title: 'Radiohead at the barbican', date: new Date('2020-08-02') },
      { title: 'Gold Panda at Koko', date: new Date('2020-08-03')},
      { title: 'Brunch with the Drag Queens', date: new Date('2020-08-04')}
    ];

    return (
      <div className="App">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={events}
        />
      </div>
    )
  }
}

export default GigCalendar