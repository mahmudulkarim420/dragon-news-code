import React from 'react';
import LatestNews from '../Components/LatestNews';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import LeftAside from '../Components/LeftAside';
import RightAside from '../Components/RightAside';
import Loading from '../Pages/Loading';

const LayOut = () => {
  const {state} = useNavigation();
  return (
    <div>
      <Header></Header>
      <section className="max-w-6xl mx-auto">
        <LatestNews></LatestNews>
      </section>
      <nav className="max-w-6xl mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="max-w-6xl mx-auto grid grid-cols-12">
        <aside className='col-span-3 sticky top-0 h-fit'>
          <LeftAside></LeftAside>
        </aside>
        <section className='col-span-6'>
        {state == 'loading' ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className='col-span-3 sticky top-0 h-fit'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default LayOut;
