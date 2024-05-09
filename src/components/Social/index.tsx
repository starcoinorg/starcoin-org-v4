
export default function Social() {
  return (
    <ul className="social">
      <li>
        <a href="http://t.me/Starcoin_STC" target="_blank">
          <svg className="icon icon--telegram">
            <use xlinkHref="#telegram" href="#telegram" />
          </svg>
          <span className="sr-only">telegram</span>
        </a>
      </li>
      <li>
        <a href="https://discord.com/invite/XJYmhRMQya" target="_blank">
          <svg className="icon icon--discord">
            <use xlinkHref="#discord" href="#discord" />
          </svg>
          <span className="sr-only">discord</span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/starcoinstc">
          <svg className="icon icon--twitter">
            <use xlinkHref="#twitter" href="#twitter" />
          </svg>
          <span className="sr-only">x-twitter</span>
        </a>
      </li>
      <li>
        <a href="https://starcoin.medium.com/" target="_blank">
          <svg className="icon icon--medium">
            <use xlinkHref="#medium" href="#medium" />
          </svg>
          <span className="sr-only">medium</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/starcoinorg" target="_blank">
          <svg className="icon icon--github">
            <use xlinkHref="#github" href="#github" />
          </svg>
          <span className="sr-only">github</span>
        </a>
      </li>
    </ul>
  );
}
