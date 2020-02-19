import BigNumber from 'bignumber.js';
import React from 'react';
import PropTypes from 'prop-types';
import { view } from 'react-easy-state';

import addRemoveLiquidity from '../stores/addRemoveLiquidity';

const round = (weight) => BigNumber(weight).decimalPlaces(2).toFixed();

const SingleAssetLight = ({ token }) => {
  const { symbol, weight } = addRemoveLiquidity[token];


  return (
    <div className="single-asset">
      <div className="asset-left">
        <div className="hidden">
          <img className="icon" src="/assets/img/available.svg" alt="icon" />
        </div>
        <div className="asset-amount">
          {symbol}
        </div>
      </div>
      <div className={`asset-weight bg-${symbol}`}>
        {round(weight)}
        %
      </div>
    </div>
  );
};

SingleAssetLight.propTypes = {
  token: PropTypes.string.isRequired,
};

export default view(SingleAssetLight);