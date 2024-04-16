import React from "react";

import './Footer.css'
import FooterMenu from "../FooterMenu/index.tsx";
import Social from "../Social/index.tsx";

export default function Footer() {
  return (
    <footer>
      <FooterMenu />
      <Social />
      <p>&copy; 2024 Starcoin.org. All Rights Reserved.</p>
    </footer>
  );
}
