import React from "react";
import './DesktopHeader.css';

import Navigation from '../Navigation/index.tsx';
import HeaderSocial from '../HeaderSocial/index.tsx';
import LanguageDropdownMenu from '../LanguageDropdownMenu/index.tsx'

export default function DesktopHeader() {
  return (
    <header>
      <h1>Header (Desktop)</h1>
      <Navigation />
      <LanguageDropdownMenu />
      <HeaderSocial />
    </header>
  );
}
