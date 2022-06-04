import styles from './Work.module.css';

type WorkCardsProps = {
  alignment: 'right' | 'left';
  theme: 'dark' | 'light';
  work?: {
    title: string;
    excerpt: string;
    slug: string;
  };
};

export function WorkCard({
  alignment = 'left',
  theme = 'dark',
  work,
}: WorkCardsProps) {
  return (
    <article
      className={`${
        styles[theme === 'dark' ? 'work-card-dark' : 'work-card-light']
      }`}
    >
      <div
        className={`${
          styles[alignment === 'left' ? 'left-alignment' : 'right-alignment']
        }`}
      >
        <strong
          className={`${
            styles[theme === 'dark' ? 'title-dark' : 'title-light']
          }`}
        >
          project logo
        </strong>
        <p
          className={`${styles[theme === 'dark' ? 'text-dark' : 'text-light']}`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          pariatur reiciendis, perspiciatis nostrum soluta odio harum
        </p>
        <div
          className={`${
            styles[
              alignment === 'left'
                ? 'button-container-left'
                : 'button-container-right'
            ]
          }`}
        >
          <button
            type="button"
            className={
              theme === 'dark'
                ? styles['primary-dark']
                : styles['primary-light']
            }
          >
            preview
          </button>
          <button
            type="button"
            className={
              theme === 'dark'
                ? styles['secondary-dark']
                : styles['secondary-light']
            }
          >
            see study case
          </button>
        </div>
      </div>
    </article>
  );
}
