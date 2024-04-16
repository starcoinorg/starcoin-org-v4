import React from "react";
import './MobileHeader.css';

import Navigation from "../Navigation/index.tsx";
import Hamburg from "../Hamburg/index.tsx";
import LanguageDropdownMenu from '../LanguageDropdownMenu/index.tsx';
import HeaderSocial from '../HeaderSocial/index.tsx';

export default function MobileHeader() {
  return (
    <header>
      <h1 id="logo">
        <a href="/">
          <svg>
            <use xlinkHref="#logo" href="#logo" />
          </svg>
        </a>
      </h1>
      
      <Hamburg />
      <Navigation />
      <HeaderSocial />
      <LanguageDropdownMenu />
    </header>
  );
}
