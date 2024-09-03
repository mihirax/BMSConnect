import React from 'react';
import { useLocation } from 'react-router-dom';
import CulturalFollowUp from './CulturalFollowUp';
import TechnicalFollowUp from './TechnicalFollowUp';
import SportsFollowUp from './SportsFollowUp';
import Header from './Header';
const FollowUp = () => {
  const location = useLocation();
  const { state } = location;
  const { selectedOptions } = state || {};

  return (
    <>
      {selectedOptions.includes(1) && <CulturalFollowUp />}
      {selectedOptions.includes(2) && <TechnicalFollowUp />}
      {selectedOptions.includes(3) && <SportsFollowUp />}
    </>
  );
};

export default FollowUp;