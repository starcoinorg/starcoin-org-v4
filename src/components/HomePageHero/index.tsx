import React from "react";
import './HomePageHero.css';

import StatisticsCard from '../StatisticsCard/index.tsx';

export default function HomePageHero() {
  return (
    <section class="hero hero--home">
      Hero Page
      <StatisticsCard />
    </section>
  );
}
