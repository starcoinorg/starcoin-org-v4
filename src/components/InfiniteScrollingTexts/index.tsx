import React from "react";
import './InfiniteScrollingTexts.css';

export default function InfiniteScrollingTexts(props) {
  return (
    <div className={`marquee__container marquee--text ${props.className}`}>
      <div className="marquee">
        <span>{props.text}</span>
        <span>{props.text}</span>
      </div>
      <div className="marquee" aria-hidden="true">
        <span>{props.text}</span>
        <span>{props.text}</span>
      </div>
    </div>
  );
}
