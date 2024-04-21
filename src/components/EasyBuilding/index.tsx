import React from "react";
import "./EasyBuilding.css";

export default function EasyBuilding() {
  return (
    <section className="section section--easy-building">
      <div id="easy-building" className="section__container easy-building__container">
        <div className="section__title">
          Easy building <small>Simplicity</small>
        </div>
        <div className="section__content">
          <div className="cards cards--easy-building">
            <div className="card">
              <figure>
                <img src="https://picsum.photos/124/186?random=1" alt="" />
                <figcaption>01</figcaption>
              </figure>
              <div className="card__content">
                <h4 className="card__title">Node</h4>
                <p>
                  The best way to understand Starcoin is to start a node
                  first.Get all content on Starcoin nodes, including a quick
                  start, how nodes work, command line usage, and more!
                </p>
              </div>
            </div>

            <div className="card">
              <figure>
                <img src="https://picsum.photos/124/186?random=2" alt="" />
                <figcaption>02</figcaption>
              </figure>
              <div className="card__content">
                <h4 className="card__title">Move</h4>
                <p>
                  More in-depth knowledge on Move, Unlock Move smart contract
                  development with our comprehensive module, exploring its
                  security-centric design, resource-oriented and
                  generalization-oriented programming, and formal verification
                  tools for robust contract security.
                </p>
              </div>
            </div>

            <div className="card">
              <figure>
                <img src="https://picsum.photos/124/186?random=3" alt="" />
                <figcaption>03</figcaption>
              </figure>
              <div className="card__content">
                <h4 className="card__title">DAPP</h4>
                <p>
                  Explore comprehensive resources for DApp development on
                  Starcoin's Layer1 technology, covering everything from setting
                  up a development environment and SDK to RPC and DApp examples,
                  ensuring seamless contract development and interaction with
                  the public chain.
                </p>
              </div>
            </div>

            <div className="card">
              <figure>
                <img src="https://picsum.photos/124/186?random=4" alt="" />
                <figcaption>04</figcaption>
              </figure>
              <div className="card__content">
                <h4 className="card__title">Examples</h4>
                <p>
                  Access streamlined DApp development resources in the Starcoin
                  ecosystem, featuring Move contract and StarMask call examples
                  for efficient and comprehensive development.
                </p>
              </div>
            </div>

            <div className="card">
              <figure>
                <img src="https://picsum.photos/124/186?random=5" alt="" />
                <figcaption>05</figcaption>
              </figure>
              <div className="card__content">
                <h4 className="card__title">Glossary</h4>
                <p>
                  Gain comprehensive insights into Starcoin's Layer 1
                  technologies, including Stdlib, NFT protocol, Oracle protocol,
                  DAO, SIP, and more, to better understand the platform's core
                  concepts and key definitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
