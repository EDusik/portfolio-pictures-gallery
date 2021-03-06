import { useContext } from 'react';
import { Context } from 'context/index';
import { GlobalActionType } from 'context/models'
import { ClickedImage } from 'types'
import styles from './LightBox.module.scss';

export function LightBox({ clickedImage }: ClickedImage) {
  const { dispatch } = useContext(Context);

  const handlePicture = () => {
    dispatch({
      type: GlobalActionType.SET_OPEN_IMAGE,
      payload: undefined
    });
  };

  return (
    <div className={styles.lightBox} onClick={handlePicture}>
      <div className={styles.modalBody} onClick={e => e.stopPropagation()}>
        <button onClick={handlePicture}>X</button>
        <div className={styles.modalTitle}>
          <h3>{clickedImage.title}</h3>
        </div>
        <img
          className={`${styles.picture}`}
          src={clickedImage.thumbnail}
          alt={clickedImage.description}
        />
        <div className={styles.modalDescription}>
          <p>{clickedImage.description} - <time>{clickedImage.creation_date}</time></p>
        </div>
      </div>
    </div>
  )
}
