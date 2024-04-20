import React from "react";

export default function FooterMenu() {
  return (
    <ul className="navigation navigation--footer">
      <li className="dropdown">
        <a href="/en/" className="dropdown__toggle">Home </a>
        <ul className="dropdown__content">
          <li><a href="/en/index#">Get Started on Starcoin</a></li>
          <li><a href="/en/index#">Starcoins Feature</a></li>
          <li><a href="/en/index#">Community</a></li>
          <li><a href="/en/index#">News</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="/en/features" className="dropdown__toggle">Features</a>
        <ul className="dropdown__content">
          <li><a href="/en/features#">Features</a></li>
          <li><a href="/en/features#">Blaze New Trails</a></li>
          <li><a href="/en/features#">Starcoin 2.0</a></li>
          <li><a href="/en/features#">Starcoin Foundation</a></li>
          <li><a href="/en/features#">Starcoin Grant</a></li>
          <li><a href="/en/features#">Starcoin Roadmap</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="/en/developers" className="dropdown__toggle">developers</a>
        <ul className="dropdown__content">
          <li><a href="/en/developers#">Easy Building</a></li>
          <li><a href="/en/developers#">Starcoin Grant</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="/en/getstc" className="dropdown__toggle">Get stc</a>
        <ul className="dropdown__content">
          <li><a href="/en/getstc#">Node Mining</a></li>
          <li><a href="/en/getstc#">StarMask Wallet</a></li>
          <li><a href="/en/getstc#">Geeks</a></li>
          <li><a href="/en/getstc#">Hardcore Player</a></li>
          <li><a href="/en/getstc#">One-chain DAO</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="/en/community" className="dropdown__toggle">Community</a>
        <ul className="dropdown__content">
          <li><a href="/en/community#">Star Dome</a></li>
          <li><a href="/en/community#">One-chain DAO</a></li>
          <li><a href="/en/community#">Ecosystem Partners</a></li>
          <li><a href="/en/community#">Branding</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="/en/news" className="dropdown__toggle">news & Blog</a>
        <ul className="dropdown__content">
          <li><a href="/en/news#">News & Blog</a></li>
        </ul>
      </li>
    </ul>
  );
}
