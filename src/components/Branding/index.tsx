import React from "react";
import './Branding.css';

export default function Branding() {
  return (
    <section className="section section--branding">
      <div id="branding" className="section__container branding__container">
        <div className="card--branding">
          <div className="branding__content">
            <h4>Branding <small>To better convey our shared values</small></h4>
            <p>MEDIA RELATIONS
Media-Marketing inquiries can be sent to</p>
            <button className="button button--outline">Download our Logo</button>
          </div>
          <a href="hr@westar.io">
            <span>hr@westar.io</span>
  <button type="button">Send Email</button>
</a>
        </div>
      </div>
    </section>
    
  );
}
