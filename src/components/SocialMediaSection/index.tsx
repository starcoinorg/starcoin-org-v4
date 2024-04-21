import React from "react";
import './SocialMediaSection.css';

import InfiniteScrollingTexts from '@/components/InfiniteScrollingTexts';
import Social from '@/components/Social';

export default function SocialMediaSection() {
  return (
    <section className="section section--social">
      <div className="section__container social__container">
      <InfiniteScrollingTexts className="marquee--text1" text="JOIN OUR COMMUNITY TODAY! JOIN OUR COMMUNITY"/>
      
      <div className="content">
      <p>As a growing community, we've dedicated countless hours to refining our craft, catering to the discerning tastes of pioneers like you. Together, we're fostering an environment where support and progress thrive side by side. If you're aligned with our vision and see the potential in our project, we warmly invite you to join us on this journey.</p>
        <div className="section__title">
          <h3>Stacoin <strong>Social Media</strong></h3>
        </div>
      <Social />
      </div>
      
      <InfiniteScrollingTexts className="marquee--text2" text="Where the Cool People Hang Out! Where the Cool People Hang Out!"/>

      </div>
    </section>
  );
}
