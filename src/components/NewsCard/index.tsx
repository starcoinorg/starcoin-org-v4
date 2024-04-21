import React from "react";
import './NewsCard.css';

export default function NewsCard() {
  return (
    <section className="section section--news-card">
      <div id="news-blog" className="section__container news-card__container">
        <div className="cards cards--news">
          <div className="card">
            <figure>
              <img src="https://picsum.photos/400/400?random=1" alt="" />
            </figure>
            <div className="card__content">
              <h4>Enhanced PoW Consensus</h4>
              <p>Starcoin's innovative consensus mechanism dynamically adjusts key network parameters, leveraging real-time data to accelerate block production, reduce transaction confirmation times, and enhance network efficiency, ultimately minimizing user wait times.</p>
            </div>
            <a href="#">
              <svg>
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </a>
          </div>
          <div className="card">
            <figure>
              <img src="https://picsum.photos/400/400?random=2" alt="" />
            </figure>
            <div className="card__content">
              <h4>Enhanced PoW Consensus</h4>
              <p>Starcoin's innovative consensus mechanism dynamically adjusts key network parameters, leveraging real-time data to accelerate block production, reduce transaction confirmation times, and enhance network efficiency, ultimately minimizing user wait times.</p>
            </div>
            <a href="#">
              <svg>
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </a>
          </div>
          <div className="card">
            <figure>
              <img src="https://picsum.photos/400/400?random=3" alt="" />
            </figure>
            <div className="card__content">
              <h4>Enhanced PoW Consensus</h4>
              <p>Starcoin's innovative consensus mechanism dynamically adjusts key network parameters, leveraging real-time data to accelerate block production, reduce transaction confirmation times, and enhance network efficiency, ultimately minimizing user wait times.</p>
            </div>
            <a href="#">
              <svg>
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </a>
          </div>
          <div className="card">
            <figure>
              <img src="https://picsum.photos/400/400?random=4" alt="" />
            </figure>
            <div className="card__content">
              <h4>Enhanced PoW Consensus</h4>
              <p>Starcoin's innovative consensus mechanism dynamically adjusts key network parameters, leveraging real-time data to accelerate block production, reduce transaction confirmation times, and enhance network efficiency, ultimately minimizing user wait times.</p>
            </div>
            <a href="#">
              <svg>
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </a>
          </div>
          <div className="card">
            <figure>
              <img src="https://picsum.photos/400/400?random=5" alt="" />
            </figure>
            <div className="card__content">
              <h4>Enhanced PoW Consensus</h4>
              <p>Starcoin's innovative consensus mechanism dynamically adjusts key network parameters, leveraging real-time data to accelerate block production, reduce transaction confirmation times, and enhance network efficiency, ultimately minimizing user wait times.</p>
            </div>
            <a href="#">
              <svg>
                <use xlinkHref="#arrowRight" href="#arrowRight" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
