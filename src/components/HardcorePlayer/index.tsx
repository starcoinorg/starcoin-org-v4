import React from "react";
import './HardcorePlayer.css';

export default function HardcorePlayer() {
  return (
    <section className="section section--hardcore-player">
      <div className="section__container hardcore-player__container">
      <div className="section__title"><strong>Hardcore</strong> Player</div>
      <div className="section__content">
        <p>As a hardcore player deeply involved with Starcoin, you will contribute your passion to drive the development of Starcoin in the following ways.</p>
        <button className="button button--outline">Building Code</button>
      </div>
      </div>
    </section>
  );
}
