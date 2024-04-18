import React from "react";

import "./Footer.css";
import FooterMenu from "@/components/FooterMenu";
import Social from "@/components/Social";

export default function Footer() {
  return (
    <footer className="page--footer">
      <div className="footer__container section__container">
        <FooterMenu />
        <Social />
        <p>&copy; 2024 Starcoin.org. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
