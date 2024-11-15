import React from 'react';
import TitleInfo from '../title-info';
import BreakingNews from '../breaking-news';
import Bridegroom from '../bride-groom';
import LoveStory from '../love-story';
import OurGallery from '../our-gallery';
import WishSection from '../wish';
import Footer from '../footer';

export default function DetailInfo() {
  return (
    <div className="space-y-5 pb-10">
      <video className="w-full" autoPlay muted>
        <source
          src="https://youtu.be/Orv-DludwYM?si=jzK1t8Nwd4NIyKr7"
        />
        Your browser does not support the video tag.
      </video>
      <div className="px-4">
        <TitleInfo />
        <BreakingNews />
        <Bridegroom />
        <LoveStory />
        <OurGallery />
        <WishSection />
      </div>
      <Footer />
    </div>
  );
}
