import React from "react";
import "./Download.css";

export default function Download() {
  return (
    <div className="card card--download">
      <div className="card__title"></div>
      <div className="card__content">
        <div className="column">
          <div className="card__media">
            <svg>
              <use xlinkHref="#github2" href="#github2" />
            </svg>
            <div className="card__media__content">
              <p>Github download and install (recommended)</p>
            </div>
          </div>
          <p>
            Download the latest version of StarMask via the official Github
            Repository that is accessible anywhere.
          </p>
          <div className="card__action">
            <a href="#">Download from Github</a>
          </div>
        </div>
        <div className="column">
          <div className="card__media">
            <svg>
              <use xlinkHref="#chrome" href="#chrome" />
            </svg>
            <div className="card__media__content">
              <p>Chrome Web Store Download</p>
            </div>
          </div>
          <p>
          It's easy and convenient to download from the app store on Google Chrome. Some areas may require internet access.
          </p>
          <div className="card__action">
            <a href="#">Download from Chrome</a>
          </div>
        </div>
      </div>
    </div>
  );
}
