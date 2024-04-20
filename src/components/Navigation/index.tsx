import React from "react";

export default function Navigation() {
  return (
    <ul className="navigation navigation--header">
      <li className="dropdown">
{/*  凡是带有  dropdown__toggle 都需要切换类名 active  */}
        <span className="dropdown__toggle"> 
          <a href="/en/" >Home </a>
          
          <svg className="icon--arrow-right"><use xlinkHref="#arrow-right" href="#arrow-right"  /></svg>
        </span>
        
        <ul className="dropdown__content">
          <li><a href="/index#">Get Started on Starcoin</a></li>
          <li><a href="/index#">Starcoins Feature</a></li>
          <li><a href="/index#">Community</a></li>
          <li><a href="/index#">News</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <span className="dropdown__toggle">
        <a href="/en/features" >Features </a>
        <svg className="icon--arrow-right"><use xlinkHref="#arrow-right" href="#arrow-right"  /></svg>
        </span>
        
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
        <span className="dropdown__toggle"><a href="/en/developers" >developers </a>
        <svg className="icon--arrow-right"><use xlinkHref="#arrow-right" href="#arrow-right"  /></svg></span>
        
        <ul className="dropdown__content">
          <li><a href="/en/developers#">Easy Building</a></li>
          <li><a href="/en/developers#">Starcoin Grant</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <span className="dropdown__toggle"><a href="/en/getstc" >Get stc</a> <svg className="icon--arrow-right"><use xlinkHref="#arrow-right" href="#arrow-right"  /></svg></span>
        
        <ul className="dropdown__content">
          <li><a href="/en/getstc#">Node Mining</a></li>
          <li><a href="/en/getstc#">StarMask Wallet</a></li>
          <li><a href="/en/getstc#">Geeks</a></li>
          <li><a href="/en/getstc#">Hardcore Player</a></li>
          <li><a href="/en/getstc#">One-chain DAO</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <span className="dropdown__toggle"><a href="/en/community" >Community </a><svg className="icon--arrow-right"><use xlinkHref="#arrow-right" href="#arrow-right"  /></svg></span>
        
        <ul className="dropdown__content">
          <li><a href="/en/community#">Star Dome</a></li>
          <li><a href="/en/community#">One-chain DAO</a></li>
          <li><a href="/en/community#">Ecosystem Partners</a></li>
          <li><a href="/en/community#">Branding</a></li>
        </ul>
      </li>
      <li className="dropdown">
        <span className="dropdown__toggle">
        <a href="/en/news" >news & Blog </a>
        <svg className="icon--arrow-right"><use xlinkHref="#arrow-right" href="#arrow-right"  /></svg>
        </span>
        
        <ul className="dropdown__content">
          <li><a href="/en/news#">News & Blog</a></li>
        </ul>
      </li>
    </ul>
  );
}

