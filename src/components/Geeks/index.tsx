import React from "react";
import './Geeks.css';



export default function Geeks() {
  return (
    <section className="section section--geeks">
      <div className="section__container geeks__container">
      <div className="section__title">Geeks <strong>Own Your Starcoin Nodes</strong></div>
      <div className="section__content">
        <p>Dive into the technical realm of Starcoin by owning and operating your own node. Unlock a plethora of capabilities, from initiating polls to minting STC and monitoring account status. Explore our comprehensive guide to installing, initializing, and utilizing Starcoin nodes.</p>
        <div className="card">
          <div className="column"><span>Node Installation</span></div>
          <div className="column"><span>Initiate Your Node with Command Lines</span></div>
          <div className="column"><span>Console Command Line Tutorials</span></div>
        </div>
      </div>
      </div>
      
    </section>
  );
}
