import React from "react";
import './NewsSection.css';



export default function NewsSection() {
  return (
    <section className="section section--news">

      <div className="section__container news__container">
        <div className="section__title"><h3>News</h3> <small>Catch the latest news</small></div>
        <div className="section__content">
          <div className="cards cards--news">
            <div className="card">
              <figure>
                <img src="http://i.pravatar.cc/500?img=12" alt="" />
              </figure>
              <div className="card__content">
                <div className="card__badge">New</div>
                <h4 className="card__title">Resource Oriented-Move</h4>
                <div className="card__date">2023.12.09</div>
                <div className="card__action">
                  <a href="#" className="button button--primary">View More <svg className="icon--arrow-right-long"><use xlinkHref="#arrow-right-long" href="#arrow-right-long" /></svg></a>
                </div>
              </div>
              
            </div>
            <div className="card">
              <figure>
                <img src="http://i.pravatar.cc/300?img=2" alt="" />
              </figure>
              <div className="card__content">
              <h4 className="card__title">2024 Blockchain New
Opportunities</h4>
              <div className="card__date">2023.09.24</div>
              </div>
            </div>
            <div className="card">
              <figure>
                <img src="http://i.pravatar.cc/300?img=14" alt="" />
              </figure>
              <div className="card__content">
              <h4 className="card__title">2024 Blockchain New
Opportunities</h4>
              <div className="card__date">2023.09.24</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
