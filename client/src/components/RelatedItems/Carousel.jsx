import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Cards from './Cards';
import { useRelated } from './RelatedProvider';
import AddOutfit from './AddOutfit';

function Carousel(props) {
  const { view } = props;
  const { header } = props;
  const { relatedItemsInfo, localData } = useRelated();
  const [relatedView] = useState(view);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState();

  if (relatedView) {
    useEffect(() => {
      setLength(relatedItemsInfo.length);
    }, [relatedItemsInfo]);
  } else {
    useEffect(() => {
      setLength(Object.keys(localData).length + 1);
    }, [localData]);
  }

  const next = () => {
    if (currentIndex < (length - 4)) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <CarouselHeader>{ header }</CarouselHeader>
      {relatedView ? (
        <>
          <CarouselContainer>
            <CarouselWrapper>
              {
                currentIndex > 0
                && (
                <LeftArrow onClick={prev}>
                  &lt;
                </LeftArrow>
                )
              }
              <CarouselContentWrapper>
                <CarouselContent style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}>
                  {relatedItemsInfo.map((eachItem) => (
                    <Cards
                      view
                      item={eachItem}
                      key={eachItem.id}
                    />
                  ))}
                </CarouselContent>
              </CarouselContentWrapper>
              {
                currentIndex < (length - 4)
                && (
                <RightArrow onClick={next}>
                  &gt;
                </RightArrow>
                )
              }
            </CarouselWrapper>
          </CarouselContainer>
          <br />
          <br />
        </>
      ) : (
        <CarouselContainer>
          <CarouselWrapper>
            {
                currentIndex > 0
                && (
                <LeftArrow onClick={prev}>
                  &lt;
                </LeftArrow>
                )
              }
            <CarouselContentWrapper>
              <CarouselContent style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}>
                <AddOutfit />
                {localData.map((eachItem) => (
                  <Cards
                    view={false}
                    item={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </CarouselContent>
            </CarouselContentWrapper>
            {
                currentIndex < (length - 4)
                && (
                <RightArrow onClick={next}>
                  &gt;
                </RightArrow>
                )
              }
          </CarouselWrapper>
        </CarouselContainer>
      )}
    </>
  );
}

export default Carousel;

const CarouselHeader = styled.div`
  font-size: 15px;
  font-weight: 300;
  padding-left: 8px;
`;

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const CarouselContentWrapper = styled.div`
  overflow: clip;
  width: 100%;
  height: 100%;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: all 250ms linear;
  -ms-overflow-style: none;  /* hide scrollbar in IE and Edge */
  scrollbar-width: none;  /* hide scrollbar in Firefox */
  > * {
    width: calc(100% / 4);
    flex-shrink: 0;
  }
`;

const BothArrows = css`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: white;
  border: 1px solid #ddd;
`;

const RightArrow = styled.button`
 ${BothArrows}
 right: 24px;
`;

const LeftArrow = styled.button`
 ${BothArrows}
 left: -24px;
`;
