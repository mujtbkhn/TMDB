import React from 'react';
import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRated';
const home = () => {
  return (
    <div className="homepage">
      <HeroBanner />

      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default home;
