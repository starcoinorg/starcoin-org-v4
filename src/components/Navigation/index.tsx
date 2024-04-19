import React from "react";
import './Navigation.css';

export default function Navigation() {
  return (
    <ul className="navigation navigation--header">
      <li className="dropdown">
        <a href="/" className="dropdown__toggle active">Home <svg className="icon--arrow-right"><use xlinkHref="#arrow-right" href="#arrow-right"  /></svg></a>
        <ul className="dropdown__content">
          <li><a href="/index#">Get Started on Starcoin</a></li>
          <li><a href="/index#">Starcoins Feature</a></li>
          <li><a href="/index#">Community</a></li>
          <li><a href="/index#">News</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="/features" className="dropdown__toggle">Features <svg className="icon--arrow-right"><use xlinkHref="#arrow-right" href="#arrow-right"  /></svg></a>
        <ul className="dropdown__content">
          <li><a href="/features#">Features</a></li>
          <li><a href="/features#">Blaze New Trails</a></li>
          <li><a href="/features#">Starcoin 2.0</a></li>
          <li><a href="/features#">Starcoin Foundation</a></li>
          <li><a href="/features#">Starcoin Grant</a></li>
          <li><a href="/features#">Starcoin Roadmap</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="/developers" className="dropdown__toggle">developers <svg className="icon--arrow-right"><use xlinkHref="#arrow-right" href="#arrow-right"  /></svg></a>
        <ul className="dropdown__content">
          <li><a href="/developers#">Easy Building</a></li>
          <li><a href="/developers#">Starcoin Grant</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="/getstc" className="dropdown__toggle">Get stc <svg className="icon--arrow-right"><use xlinkHref="#arrow-right" href="#arrow-right"  /></svg></a>
        <ul className="dropdown__content">
          <li><a href="/getstc#">Node Mining</a></li>
          <li><a href="/getstc#">StarMask Wallet</a></li>
          <li><a href="/getstc#">Geeks</a></li>
          <li><a href="/getstc#">Hardcore Player</a></li>
          <li><a href="/getstc#">One-chain DAO</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="/community" className="dropdown__toggle">Community <svg className="icon--arrow-right"><use xlinkHref="#arrow-right" href="#arrow-right"  /></svg></a>
        <ul className="dropdown__content">
          <li><a href="/community#">Star Dome</a></li>
          <li><a href="/community#">One-chain DAO</a></li>
          <li><a href="/community#">Ecosystem Partners</a></li>
          <li><a href="/community#">Branding</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <a href="/news" className="dropdown__toggle">news & Blog <svg className="icon--arrow-right"><use xlinkHref="#arrow-right" href="#arrow-right"  /></svg></a>
        <ul className="dropdown__content">
          <li><a href="/news#">News & Blog</a></li>
        </ul>
      </li>
    </ul>
  );
}

