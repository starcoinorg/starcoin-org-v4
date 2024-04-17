import React from "react";
import './StarcoinFeatures.css';

import FeatureTable from '../FeatureTable/index.tsx';

export default function StarcoinFeatures() {
  return (
    <section className="section section--starcoin-features">
      <div className="section__container starcoin-features__container">
      Starcoin Features
      <FeatureTable />
      </div>
    </section>
  );
}
