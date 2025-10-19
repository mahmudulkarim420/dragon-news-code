import React, { useEffect } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';
import { useState } from 'react';

const NewsDetails = () => {
  const data = useLoaderData();
  const {id} = useParams();
  const [news, setNews] = useState({});
  useEffect(() => {
    const newsDetails = data.find(singleNews => singleNews.id == id)
    setNews(newsDetails)
  },[data, id])
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className='max-w-6xl mx-auto w-11/12 grid grid-cols-12 gap-5 py-10'>
        <section className=" col-span-9">
          <h2 className='font-bold mb-5'>Dragon News</h2>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className='col-span-3'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;