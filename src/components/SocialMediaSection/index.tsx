import React from "react";
import './SocialMediaSection.css';

import InfiniteScrollingTexts from '../InfiniteScrollingTexts/index.tsx';
import Social from '../Social/index.tsx';

export default function SocialMediaSection() {
  return (
    <div>
      <InfiniteScrollingTexts />
      Social Media Section
      <Social />
    </div>
  );
}
