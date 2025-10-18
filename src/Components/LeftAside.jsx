import React, { Suspense } from 'react';
import Categories from './Categories';

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={'Loading...'}>
      <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;