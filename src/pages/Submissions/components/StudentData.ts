import avImg from './images5/img_avatar.png';
interface Student {
  id: string;
  name: string;
  avatar: string;
  score: number | null;
  submitted: boolean;
}
const students: Student[] = [
    { id: 'AB12456', name: 'Rahul kumar', avatar: avImg, score: 70, submitted: true },
    { id: 'AB12456', name: 'Rahul kumar', avatar: avImg, score: null, submitted: false },
    { id: 'AB12456', name: 'Rahul kumar', avatar: avImg, score: null, submitted: false },
    { id: 'AB12456', name: 'Rahul kumar', avatar: avImg, score: null, submitted: false },
    { id: 'AB12456', name: 'Rahul kumar', avatar: avImg, score: null, submitted: false },
    { id: 'AB12456', name: 'Rahul kumar', avatar: avImg, score: null, submitted: false },
    { id: 'AB12456', name: 'Rahul kumar', avatar: avImg, score: null, submitted: false },
    { id: 'AB12456', name: 'Rahul kumar', avatar: avImg, score: null, submitted: false }
];

export default students