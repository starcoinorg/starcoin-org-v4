import React from "react";
import "./NewTrails.css";

export default function NewTrails() {
  return (
    <section className="section section--new-trails">
      <div className="section__container new-trails__container">
        <div className="section__title">
          Blaze New <strong>Trails</strong>
        </div>
        <div className="section__content">
          <input type="radio" className="sr-only" name="news" id="storage" />
          <input type="radio" className="sr-only" name="news" id="easy-gas" />
          <input type="radio" className="sr-only" name="news" id="dao" checked/>
          <input type="radio" className="sr-only" name="news" id="billing" />
          <input type="radio" className="sr-only" name="news" id="bootstrapped" />
          <input type="radio" className="sr-only" name="news" id="stdlib" />
          <input type="radio" className="sr-only" name="news" id="freely-nft" />
          <input type="radio" className="sr-only" name="news" id="verification" />
          <ul className="news-lists">
            <li id="news__item--storage"><label htmlFor="storage">State Storage</label></li>
            <li id="news__item--easy-gas"><label htmlFor="easy-gas">Easy Gas</label></li>
            <li id="news__item--dao"><label htmlFor="dao">On-chain DAO governance</label></li>
            <li id="news__item--billing"><label htmlFor="billing">State Billing</label></li>
            <li id="news__item--bootstrapped"><label htmlFor="bootstrapped">Bootstrapped</label></li>
            <li id="news__item--stdlib"><label htmlFor="stdlib">Stdlib</label></li>
            <li id="news__item--freely-nft"><label htmlFor="freely-nft">Freely NFT</label></li>
            <li id="news__item--verification"><label htmlFor="verification">Formal Verification</label></li>
          </ul>
          <ul className="cards--new">
            <li id="card--storage">
              <svg>
                <use xlinkHref="#card1" href="#card1" />
              </svg>
              <p>Enhancements streamline contract ownership and security by eliminating contract accounts, clarifying state ownership, and enabling a dynamic billing strategy based on user-held STC, ensuring efficient resource allocation and incentivizing responsible state management.</p>
            </li>
            <li id="card--easy-gas">
              <svg>
                <use xlinkHref="#card2" href="#card2" />
                <p>Revolutionizes transaction experiences by allowing users to pay gas fees with any supported token, eliminating barriers to entry and enhancing user-friendliness. Seamlessly integrated on-chain, this innovation simplifies gas payments, ensuring wider adoption and setting new standards for transaction accessibility in the Web3 era.</p>
              </svg>
            </li>
            <li id="card--dao">
              <svg>
                <use xlinkHref="#card3" href="#card3" />
              </svg>
              <p>Promotes decentralized decision-making with a streamlined proposal process and modular implementation. Through token-based voting and a structured proposal lifecycle, it enhances transparency, efficiency, and community empowerment. Leveraging Move language capabilities, Starcoin sets new standards for democratic governance, ensuring adaptability and alignment with diverse community interests in the blockchain ecosystem.</p>
            </li>
            <li id="card--billing">
              <svg>
                <use xlinkHref="#card4" href="#card4" />
              </svg>
              <p>To tackle the challenge of state explosion in public blockchains, prioritizing valuable data retention while eliminating redundancy. This approach optimizes resource usage, enhances network performance, and ensures long-term sustainability, reflecting Starcoin's commitment to a robust and scalable blockchain infrastructure.</p>
            </li>
            <li id="card--bootstrapped">
              <svg>
                <use xlinkHref="#card5" href="#card5" />
              </svg>
              <p>To ensure top-notch security for smart contracts, reducing vulnerabilities and enhancing stability, thereby safeguarding user assets and fortifying the overall network security.</p>
            </li>
            <li id="card--stdlib">
              <svg>
                <use xlinkHref="#card6" href="#card6" />
              </svg>
              <p>Ensures sustainable growth and stability by introducing a fixed token supply, transparent distribution, and linear release mechanism, fostering trust and incentivizing network participation for long-term ecosystem development and financial self-sufficiency.</p>
            </li>
            <li id="card--freely-nft">
              <svg>
                <use xlinkHref="#card7" href="#card7" />
              </svg>
              <p>Leverages its Stdlib (Standard Library) to streamline consensus management, offering a secure and scalable framework for developers. By implementing universal protocol standards and providing reusable components and user-friendly tools, Stdlib simplifies application development, fostering innovation and growth within the Starcoin ecosystem. </p>
            </li>
            <li id="card--verification">
              <svg>
                <use xlinkHref="#card8" href="#card8" />
              </svg>
              <p>Pioneers a new NFT standard, offering both security and scalability. With a focus on security, its protocol ensures NFTs cannot be copied or lost at the virtual machine level. Moreover, leveraging generics and batch operations, Starcoin's standard enables NFTs to be freely combined, providing scalability for diverse NFT scenarios.</p>
            </li>
          </ul>
        </div>
      </div>
      <figure className="news-trails__bg">
      <img src="https://picsum.photos/1920/1024?random=4" alt="" />
      </figure>
    </section>
  );
}
