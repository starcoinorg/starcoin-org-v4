import React from "react";

import "./Footer.css";
import FooterMenu from "../FooterMenu/index.tsx";
import Social from "../Social/index.tsx";

export default function Footer() {
  return (
    <footer className="page--footer">
      <div className="footer--container">
        <FooterMenu />
        <Social />
        <p>&copy; 2024 Starcoin.org. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
