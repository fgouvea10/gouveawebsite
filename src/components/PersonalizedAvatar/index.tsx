import React from 'react';

import styles from './styles.module.scss';

interface AvatarProps {
  label: string;
  image: string;
}

export function PersonalizedAvatar({ image, label }: AvatarProps) {
  return (
    <div className={styles.container}>
      <img src={image} alt={label} />
    </div>
  );
}
