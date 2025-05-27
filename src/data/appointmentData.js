// src/data/appointmentData.js
const appointmentData = [
  {
    day: "Thursday",
    schedule: [
      {
        title: "Health checkup complete",
        time: "10:00 AM",
        icon: "🩺"
      },
      {
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "👁️"
      }
    ]
  },
  {
    day: "Saturday",
    schedule: [
      {
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "❤️"
      },
      {
        title: "Neurologist",
        time: "16:00 PM",
        icon: "🧑"
      }
    ]
  }
];

export default appointmentData;



export const activityData = {
  text: 'Here is your overall activity and appointments over the last week.',
  chartBars: [50, 70, 30, 90, 60, 80, 40],
};
