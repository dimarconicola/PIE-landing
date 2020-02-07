/* eslint arrow-body-style: 0 */

import React from 'react';
import { view } from 'react-easy-state';

const WhitepaperSection = () => {
  return (
    <div className="content">
      <div className="whitepaper-container lg:text-ratherbig lg:w-90pc lg:mx-5pc">
        <div>
          Fancy a piece of pie
          <span role="img" aria-label="cake">
            &nbsp;🍰
          </span>
          ? Request the Whitepaper
        </div>
        <a
          className="whitepaper-link lg:text-quiteverybig"
          href="https://pie283460.typeform.com/to/uy9NZt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="whitepaper-icon">
            <span role="img" aria-label="document">
              📄
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default view(WhitepaperSection);
