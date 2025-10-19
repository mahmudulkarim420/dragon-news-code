import React, { Suspense } from 'react';
import Categories from './Categories';
import Loading from '../Pages/Loading';

const LeftAside = () => {
  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>
      <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;