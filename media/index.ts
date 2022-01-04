import { IMedia } from '@Types/interfaces';
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faVk,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const media: IMedia[] = [
  {
    icon: faInstagram,
    link: '#',
    activeColor: '#CD486B',
  },
  {
    icon: faFacebook,
    link: '#',
    activeColor: '#4267B2',
  },
  {
    icon: faVk,
    link: '#',
    activeColor: '#4C75A3',
  },
  {
    icon: faTelegram,
    link: '#',
    activeColor: '#0088CC',
  },
  {
    icon: faWhatsapp,
    link: '#',
    activeColor: '#25D366',
  },
];

export default media;
