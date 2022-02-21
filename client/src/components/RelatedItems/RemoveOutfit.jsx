import React from 'react';
import { useRelated } from './RelatedProvider';
// import appcss from '../App.css';
import css from './Carousel.css';

function RemoveOutfit(props) {
  const { item } = props;
  const { setLocalData } = useRelated();

  function removeItem() {
    const storage = JSON.parse(localStorage.items);
    delete storage[item.id];
    localStorage.setItem('items', JSON.stringify(storage));
    setLocalData(JSON.parse(localStorage.items));
  }

  return (
    <div className={css.button_padding}>
      <button type="button" onClick={removeItem} className={css.add_button}>
        {/* <div className={css.para_md}> */}


          x
        {/* </div> */}
      </button>
    </div>
  );
}

export default RemoveOutfit;
