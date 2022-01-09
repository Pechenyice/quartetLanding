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
    name: 'Instagram',
    icon: faInstagram,
    link: '#',
    activeColor: '#CD486B',
  },
  {
    name: 'Facebook',
    icon: faFacebook,
    link: '#',
    activeColor: '#4267B2',
  },
  {
    name: 'VK',
    icon: faVk,
    link: '#',
    activeColor: '#4C75A3',
  },
  {
    name: 'Telegram',
    icon: faTelegram,
    link: '#',
    activeColor: '#0088CC',
  },
  {
    name: 'Whatsapp',
    icon: faWhatsapp,
    link: '#',
    activeColor: '#25D366',
  },
];

export default media;
