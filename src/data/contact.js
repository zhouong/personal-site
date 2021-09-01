import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/zhouong',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/ong.chengzhou',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/zhouong/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/chengzhouong',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:czo2@illinois.edu',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
