import { useState } from 'react';
import { Picture } from './Picture';
import { PictureList } from 'types';
import VisibilitySensor from 'react-visibility-sensor';

export function PictureList({ pictures }: PictureList) {

  const [imagesShownArray, setImagesShownArray] = useState(
    Array(pictures.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <div className={'flex flex-wrap	w-full'}>
      {pictures && pictures.map((picture, index) => (
        <VisibilitySensor
          key={index}
          partialVisibility={true}
          offset={{ bottom: 80 }}
          onChange={(isVisible) => imageVisibleChange(index, isVisible)}
        >
          <Picture
            key={picture.slug}
            picture={picture}
            show={imagesShownArray[index]} />
        </VisibilitySensor>
      ))}
    </div>
  )
}
