import { MdDashboard, MdHistory, MdCalendarToday, MdAssignment, MdBarChart, MdChat, MdHeadsetMic } from 'react-icons/md';

export const NAV_LINKS = [
  { kind: 'header', title: 'General' },
  { segment: 'dashboard', title: 'Dashboard', icon: <MdDashboard /> },
  { segment: 'history', title: 'History', icon: <MdHistory /> },
  { segment: 'calendar', title: 'Calendar', icon: <MdCalendarToday /> },
  { segment: 'appointments', title: 'Appointments', icon: <MdAssignment /> },
  { segment: 'statistics', title: 'Statistics', icon: <MdBarChart /> },
  { kind: 'header', title: 'Tools' },
  { segment: 'chat', title: 'Chat', icon: <MdChat /> },
  { segment: 'support', title: 'Support', icon: <MdHeadsetMic /> },
];
