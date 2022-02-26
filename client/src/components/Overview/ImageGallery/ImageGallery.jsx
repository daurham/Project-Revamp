import React from 'react';
import styled from 'styled-components';
import { useOverview } from '../../SharedContexts/OverviewProvider';
import Carousel from './Carousel';
import './Carousel.css';

function ImageGallery() {
  const { currentStyle } = useOverview();

  if (!currentStyle) {
    return null;
  }

  return (
    <div
      className="ImageGallery"
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        maxHeight: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <div
        className="MainImage"
        style={{
          maxWidth: '80%',
          maxHeight: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Carousel show={1} infiniteLoop>
          {(currentStyle.photos.map(
            (photo, index) => (<MainImage src={photo.url || 'https://anthemprep.greatheartsamerica.org/wp-content/uploads/sites/12/2016/12/default-placeholder.png'} key={index} />),
          ))}
        </Carousel>
      </div>

      {currentStyle.photos.length > 7 ? (

        <div
          className="Thumbnail"
          style={{
            maxHeight: '20%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Carousel show={7} infiniteLoop>
            {(currentStyle.photos.map(
              (photo, index) => (
                <Thumbnail
                  src={photo.thumbnail_url || 'https://anthemprep.greatheartsamerica.org/wp-content/uploads/sites/12/2016/12/default-placeholder.png'}
                  key={index}
                  name={index}
                />
              ),
            ))}
          </Carousel>
        </div>

      ) : (
        <div
          className="Thumbnail"
          style={{
            maxHeight: '20%',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'row',
          }}
        >

          {(currentStyle.photos.map(
            (photo, index) => (
              <Thumbnail
                src={photo.thumbnail_url || 'https://anthemprep.greatheartsamerica.org/wp-content/uploads/sites/12/2016/12/default-placeholder.png'}
                key={index}
                name={index}
              />
            ),
          ))}

        </div>

      )}

    </div>
  );
}

export default ImageGallery;

const MainImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Thumbnail = styled.img`
  margin: 5px;
  border: 1px solid #CCCCCC;
  width: 50px;
  height: 50px;
  object-fit: cover;
  &:hover{
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)
  }
`;
