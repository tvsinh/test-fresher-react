import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import './style.css';

const ScrollTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <div>
          <button onClick={handleClick} className="button">
            <IoIosArrowUp fontSize="inherit" className="iconUp" />
          </button>
        </div>
      )}
    </div>
  );
};
export default ScrollTop;
