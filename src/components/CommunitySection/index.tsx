import React from "react";
import './CommunitySection.css';

import Social from '../Social/index.tsx';
import InfiniteScrollingLogos from '../InfiniteScrollingLogos/index.tsx';

export default function CommunitySection() {
  return (
    <section className="section section--community">
      <div className="section__container community__container">
        <div className="section__title">Community <small>Existence Holds Value</small></div>
        <div className="section__content">
          <div className="column">
          <Social />
        <div className="title">One-chain DAO</div>
        <p>Starcoin is a community co-owned native club.</p>
<p>Supported by sustainable incentives and transparent & verifiable systems.</p>
<p>Serving stakeholders who can co-build on the future of the DAO.</p>
          </div>
          <div className="column">
            <img src="http://i.pravatar.cc/500?img=9" alt="" />
          </div>
        </div>
        <h4>Ecosystem projects</h4>
      </div>
      <InfiniteScrollingLogos />
    </section>
  );
}
