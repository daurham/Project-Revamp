// import React from 'react';
// import css from '../RelatedItems/Carousel.css';
// import { useRelated } from '../RelatedItems/RelatedProvider';

// function AddOutfit(props) {
//   const { item } = props;
//   const { setLocalData } = useRelated();

//   function onButtonClick() {
//     let storage;
//     if (!localStorage.items) {
//       storage = [item];
//       // storage.push(item);
//     } else {
//       let found = false;
//       storage = JSON.parse(localStorage.items);
//       for (let i = 0; i < storage.length; i += 1) {
//         if (storage[i].id === item.id) {
//           found = true;
//           break;
//         }
//       }
//       if (!found) {
//         storage.push(item);
//       }
//     }
//     localStorage.setItem('items', JSON.stringify(storage));
//     setLocalData(JSON.parse(localStorage.items));
//   }

//   return (
//     <div className={css.button_padding}>
//       <button type="button" onClick={onButtonClick} className={css.add_button}>
//         {/* <div className={css.para_md}> */}
//         <div>

//           +
//         </div>
//       </button>
//     </div>
//   );
// }

// export default AddOutfit;
