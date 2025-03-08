import React from "react";
import s from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return (
    <div className={s.root}>
    <h1 >
      <span>🧢</span>
      <br />
      <h2>Nothing Found</h2>
      <p className={s.description}>Unfortunately, this page is not available in our website</p>
    </h1>
    </div>
  );
};

export default NotFoundBlock;
