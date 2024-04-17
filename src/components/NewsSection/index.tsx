import React from "react";
import './NewsSection.css';

import SwiperNews from '../SwiperNews/index.tsx';


export default function NewsSection() {
  return (
    <section className="section section--news">

      <div className="section__container news__container">
      News Section
      <SwiperNews />
      </div>
    </section>
  );
}
