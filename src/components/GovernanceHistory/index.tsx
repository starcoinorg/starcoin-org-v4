import React from "react";
import './GovernanceHistory.css';



export default function GovernanceHistory() {
  return (
    <section className="section section--governance-history">
      <div id="one-chain-dao" className="section__container governance-history__container">
        <div className="section__title">One-chain <strong>DAO</strong></div>
        <div className="section__content">
          <p>Starcoin is a community co-owned native club, Supported by sustainable incentives and transparent & verifiable systems. Serving stakeholders who can co-build on the future of the DAO.</p>
          <div className="history--info">
            <div className="item">
              <svg>
                <use xlinkHref="#governance" href="#governance" />
              </svg>
              <h5>Self-Governance</h5>
            </div>
            <div className="item">
            <svg>
                <use xlinkHref="#democratic" href="#democratic" />
              </svg>
              <h5>Democratic</h5>
            </div>
            <div className="item">
            <svg>
                <use xlinkHref="#access" href="#access" />
              </svg>
              <h5>All-Access</h5>
            </div>
          </div>
          <div className="cards cards--history">
            <div className="card">
              <figure className="card__media">
                <img src="https://picsum.photos/400/400?random=3" alt="" />
              </figure>
              <div className="card__content">
                <div className="card__title">
                  <small>Starcoin</small>
                  POLL
                </div>
                <button className="button button--primary">Learn More</button>
              </div>
            </div>
            <div className="card">
              <figure className="card__media">
                <img src="https://picsum.photos/400/400?random=2" alt="" />
              </figure>
              <div className="card__content">
                <div className="card__title">
                  <small>Starcoin</small>
                  Airdrop
                </div>
                <button className="button button--primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="history--links">
            <div className="history--links__title">Governance history</div>
            <ul className="history--links__link">
              <li><a href="#">Proposal 13: upgrade onchain move...</a></li>
              <li><a href="#">Proposal 12: upgrade starcoin stdlib to v11</a></li>
              <li><a href="#">Proposal 11: :upgrade onchain config of move bytecode version to v4</a></li>

            </ul>
          </div>
        </div>
      </div>

    </section>
  );
}
