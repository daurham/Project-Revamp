import React from 'react';
import Carousel from './Carousel';
import RelatedProvider from './RelatedProvider';

function RelatedItemsParent() {
  return (
    <div style={{
      maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64,
    }}
    >
      <RelatedProvider>
        <Carousel header="Related Products" view shown={4}>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
              <div>
                <div>do title werk</div>
                <div>do money werk</div>
                <div>do cat werk</div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{ width: '100%' }} />
            </div>
          </div>
        </Carousel>
        <Carousel header="Your Outfit" view={false} shown={4} />
      </RelatedProvider>
    </div>
  );
}

export default RelatedItemsParent;
