import React from 'react';
// import css from './Overview.css';
import appcss from '../App.css';

function Overview() {
  return (
    <>
      <p className={appcss.title}>Title</p>
      <p className={appcss.sub_title}>Sub Title</p>
      <p className={appcss.para_title}>para title</p>
      <p className={appcss.para_md}>para md</p>
      <p className={appcss.para_sm}>para sm</p>
      <p>Default</p>
    </>
  );
}

export default Overview;
