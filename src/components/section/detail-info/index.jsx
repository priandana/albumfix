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
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Orv-DludwYM?si=jzK1t8Nwd4NIyKr7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
        Your browser does not support the video tag.
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
