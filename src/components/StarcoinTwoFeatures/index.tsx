import './StarcoinTwoFeatures.css';

import FeatureTable from '@/components/FeatureTable';

export default function StarcoinTwoFeatures() {
  return (
    <section className="section section--starcoin-two-features">
      <div id="starcoin-v2" className="section__container starcoin-two-features__container">
        <div className="section__title">Starcoin 2.0</div>
        <div className="section__content">
          <FeatureTable />
        </div>
      </div>
    </section>
  );
}
