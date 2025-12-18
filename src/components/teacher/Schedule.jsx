import './Schedule.css';
import CurrentTimeLine from '../../assets/current-time-line.svg?react';

const Schedule = () => {
  // Time slots for the schedule
  const timeSlots = [
    '7:15',
    '8:05',
    '8:55',
    '9:10',
    '10:00',
    '10:50',
    '11:40',
    '12:30'
  ];

  // Schedule events with their positions and details
  const events = [
    {
      id: 1,
      title: 'الإطلاع على الواجبات',
      duration: '50 د',
      startCol: 1,
      span: 1,
      bgColor: 'bg-indigo-100',
      row: 2
    },
    {
      id: 2,
      title: 'اجتماع أولياء الأمور',
      duration: '2 ساعة',
      startCol: 4,
      span: 2,
      bgColor: 'bg-amber-50',
      row: 3
    }
  ];

  return (
    <div className="schedule-container">
      {/* Time slots row */}
      <div className="time-slots">
        {timeSlots.map((time, index) => (
          <div
            key={index}
            className={`time-slot ${index === 4 ? 'current-time' : ''}`}
          >
            {time}
          </div>
        ))}
      </div>

      {/* Schedule grid for events */}
      <div className="schedule-grid">
        {events.map((event) => (
          <div
            key={event.id}
            className={`schedule-event ${event.bgColor}`}
            style={{
              gridColumn: `${event.startCol} / span ${event.span}`,
              gridRow: event.row
            }}
          >
            <span className="event-duration">{event.duration}</span>
            <span className="event-title">{event.title}</span>
          </div>
        ))}

        {/* Current time indicator line */}
        <div className="current-time-line">
          <CurrentTimeLine />
        </div>
      </div>
    </div>
  );
};

export default Schedule;