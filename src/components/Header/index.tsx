import React from "react";
import './Header.css'
import MobileHeader from "../MobileHeader/index.tsx";
import DesktopHeader from "../DesktopHeader/index.tsx";

export default function Header() {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  );
}
