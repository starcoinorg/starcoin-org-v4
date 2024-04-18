import React from "react";
import './SocialMediaSection.css';

import InfiniteScrollingTexts from '../InfiniteScrollingTexts/index.tsx';
import Social from '../Social/index.tsx';

export default function SocialMediaSection() {
  return (
    <section className="section section--social">
      <div className="section__container social__container">
      <InfiniteScrollingTexts />
      Social Media Section
      <Social />
      </div>
    </section>
  );
}
