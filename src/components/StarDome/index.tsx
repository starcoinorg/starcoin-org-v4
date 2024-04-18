import React from "react";
import './StarDome.css';

export default function StarDome() {
  return (
    <section className="section section--star-dome">
      <div className="section__container star-dome__container">
        <div className="section__title">STAR <strong>DOME</strong></div>
        <div className="section__content">
          <p>Inspired by the unity of the StarDome image, a global collective of like-minded individuals is coming together to enact meaningful change. As Starcoin embarks on its journey of global expansion, we're privileged to collaborate with people from diverse backgrounds through the Star Dome Program. Join us as we take the next leap forward by officially launching the Starcoin Ambassador Program, The Star Dome Program.</p>
          <div className="action">
            <button className="button button--primary">Apply Online</button>
          </div>
          <div className="cards cards--star-dome">
            <div className="card">
              <div className="badge">Coming Soon</div>
              <div className="card__title">Third</div>
              <div className="card__content">Cohort of Ambassadors</div>
            </div>
            <div className="card">
              <div className="badge">Closed</div>
              <div className="card__title">Second</div>
              <div className="card__content">Cohort of Ambassadors</div>
            </div>
            <div className="card">
              <div className="badge">Closed</div>
              <div className="card__title">First</div>
              <div className="card__content">Cohort of Ambassadors</div>
            </div>
          </div>
        </div>
      </div>
      <figure>
        <img src="https://picsum.photos/1920/1024?random=3" alt="" />
      </figure>
    </section>
  );
}
