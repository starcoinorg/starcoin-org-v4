import React from "react";
import './StarMaskWallet.css';

import Download from '@/components/Download';

export default function StarMaskWallet() {
  return (
    <section className="section section-star-mask-wallet">
      <div id="starmask-wallet" className="section__container star-mask-wallet__container">
        <div className="section__title">StarMask <strong>Wallet</strong></div>
        <div className="section__content">
          <p>The MetaMask equivalent for Move, a non-custodial Chrome extension wallet tailored for Starcoin. With support for DeFi/Web3 functionality, NFT galleries, on-chain asset management, and DID integration.</p>

          <p>Get started with Starcoin swiftly using the Chrome browser wallet, StarMask. With StarMask, effortlessly manage your STC and NFTs on the Starcoin chain, and seamlessly navigate your accounts.</p>
          <Download />
          <div className="actions">
            <button className="button button--primary">How To Install</button>
            <button className="button button--outline">How To Use</button>
          </div>
          <h5>A hardware wallet that <strong>supports STC</strong></h5>
          <p>After installing StarMask, for enhanced account security, consider using a hardware wallet like <a href="#">OneKey</a>. </p>
        </div>


      </div>

    </section>
  );
}
