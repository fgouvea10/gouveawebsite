import React from 'react';
import { FaLinkedinIn, FaGithub, FaBehance } from 'react-icons/fa';

import Link from 'next/link';

import styles from './styles.module.scss';

const data = [
  {
    id: 1,
    name: 'LinkedIn',
    icon: <FaLinkedinIn />,
    route: 'https://linkedin.com/in/fgouvea10',
  },
  {
    id: 2,
    name: 'Github',
    icon: <FaGithub />,
    route: 'https://github.com/fgouvea10',
  },
  {
    id: 3,
    name: 'Behance',
    icon: <FaBehance />,
    route: 'https://behance.net/gouvea',
  },
];

function Sidebar() {
  return (
    <ul className={styles.container}>
      {data &&
        data.map((item) => (
          <li key={item.id}>
            <Link href={item.route}>
              <a>{item.icon}</a>
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default Sidebar;
