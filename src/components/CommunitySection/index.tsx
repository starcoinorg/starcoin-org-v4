import React from "react";
import './CommunitySection.css';

import Social from '../Social/index.tsx';
import SwiperCard from '../SwiperCard/index.tsx';
import InfiniteScrollingLogos from '../InfiniteScrollingLogos/index.tsx';

export default function CommunitySection() {
  return (
    <section className="section section--community">
      <div className="section__container community__container">
      Community Section
      <Social />
      <SwiperCard />
      <InfiniteScrollingLogos />
      </div>
    </section>
  );
}
