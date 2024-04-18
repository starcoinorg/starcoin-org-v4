import React from "react";
import "./LanguageDropdownMenu.css";

export default function LanguageDropdownMenu() {
  return (
    <div className="dropdown dropdown--language">
      <button className="dropdown__toggle">
        <span>English</span>
        <svg className="icon icon--down">
          <use xlinkHref="#angle-down" href="#angle-down" />
        </svg>
      </button>
      
     {/* 注释 待加功能
        1. "--options" 根据 option 数量变化 
        2. 选中的 option 需要添加类名 active
        3. button 添加 click 事件，同时 dropdown__content 中 active 类名切换
      */}
      
      <div className="dropdown__content" style={{'--options': 7}}>
        <div className="option">English</div>
        <div className="option">Arabic</div>
        <div className="option">Hindi</div>
        <div className="option">Spanish</div>
        <div className="option">French</div>
        <div className="option">Japanese</div>
        <div className="option">Korean</div>
      </div>
    </div>
  );
}
