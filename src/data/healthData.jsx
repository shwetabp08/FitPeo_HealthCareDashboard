import { FaHeart } from "react-icons/fa";
import { GiLeg } from "react-icons/gi";
import { MdCropFree } from "react-icons/md"

export const anatomyIndicators = [
  { id: 'heart', name: 'Healthy Heart',color:"white",bgColor:"#3734a9",border:"3px solid #292594", position: { top: '21%', left: '68%' },icon:<FaHeart color="red" size={15}/> }, 
  { id: 'bone', name: 'Healthy leg',color:"black",bgColor:"#01e2ee",border:"3px solid #31d4de", position: { top: '67%', left: '3%' },icon:<GiLeg size={15} color="#eee873" /> },
  {id:'scanner1',scan:<MdCropFree size={50} color="#31d4de" />, position: { top: '20%', left: '50%' } },
  {id:'scanner2',scan:<MdCropFree size={50} color="#292594" />, position: { top: '65%', left: '40%' } }
];

export const healthCards = [
  { id: 'lungs-card', name: 'Lungs', date: 'Oct 24, 2021', status: 'issue', progress: 75, icon: 'lungs-icon' },
  { id: 'teeth-card', name: 'Teeth', date: 'Oct 24, 2021', status: 'healthy', progress: 75, icon: 'teeth-icon' },
  { id: 'bone-card', name: 'Bone', date: 'Oct 24, 2021', status: 'issue', progress: 75, icon: 'bone-icon' },
];