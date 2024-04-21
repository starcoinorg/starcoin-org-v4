import "./Dividers.css";

export default function Dividers() {
  return (
    <section className="section section--dividers">
      <div className="dividers__container section__container">
        <div className="dividers">
          <svg className="icon icon--star">
            <use xlinkHref="#star" href="#star" />
          </svg>
          <svg className="icon icon--star">
            <use xlinkHref="#star" href="#star" />
          </svg>
          <svg className="icon icon--star">
            <use xlinkHref="#star" href="#star" />
          </svg>
        </div>
      </div>
    </section>
  );
}
