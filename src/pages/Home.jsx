import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import NewsSection from '../components/NewsSection/NewsSection';
import PortalTitle from '../components/PortalTitle';

export default function Home() {
  return (
    <>
      <Header />
      <PortalTitle />
      <NewsSection />
      <Footer />
    </>
  );
}
