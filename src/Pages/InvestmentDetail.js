import React from 'react';
import TopNavi from '../Components/TopNavi';
import Hero from '../Components/Hero';
import ComparisonTable from '../Components/ComparisonTable';
import GradienBgSection from '../Components/GradienBgSection';
import GradientText from '../Components/GradientText';
import Features from '../Components/Features';
import BlackBGgradientText from '../Components/BlackBGgradientText';
import BigBlackTitle from '../Components/BigBlackTitle';
import Newsletter from '../Components/Newsletter';

function InvestmentDetail() {
  return (
    <div className="App">
      <Hero/>
      <ComparisonTable/>
      <GradientText/>
      <Newsletter/>
      <Features/>
      <BlackBGgradientText/>
      <BigBlackTitle/>
      <Newsletter/>
    </div>
  );
}

export default InvestmentDetail;