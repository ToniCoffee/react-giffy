import React, { Suspense } from 'react';
import { useNearScreen, Trending } from 'util/imports';

export const LazyTrending = () => {
  // const {isNearScreen, fromRef} = useNearScreen();
  const {isNearScreen, fromRef} = useNearScreen({distance: '200px'});

  return <div ref={fromRef}>
    <Suspense fallback={'Cargando ...'} >
      {isNearScreen ? <Trending /> : 'Cargando ...'}
    </Suspense>
  </div>;
};