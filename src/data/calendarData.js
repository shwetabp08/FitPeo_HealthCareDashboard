// src/data/calendar.js
export const calendarData = [
  {
    id: 1,
    day: 'Mon',
    date: 25,
    times: ['10:00', '11:00', '12:00'],
  },
  {
    id: 2,
    day: 'Tues',
    date: 26,
    isActive: true,
    times: ['08:00', '09:00', '10:00'],
    selectedTime: '09:00',
  },
  {
    id: 3,
    day: 'Wed',
    date: 27,
    times: ['12:00', '', '13:00'],
  },
  {
    id: 4,
    day: 'Thurs',
    date: 28,
    times: ['10:00', '11:00', ''],
    selectedTime: '11:00',
  },
  {
    id: 5,
    day: 'Fri',
    date: 29,
    times: ['', '14:00', '16:00'],
  },
  {
    id: 6,
    day: 'Sat',
    date: 30,
    times: ['12:00', '14:00', '15:00'],
  },
  {
    id: 7,
    day: 'Sun',
    date: 31,
    times: ['09:00', '10:00', '11:00'],
    isDisabled: true,
  },
];
