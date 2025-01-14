import I18n, { type LocaleCode } from "@/i18n";

export default function MoveInnovationWithStarcoin({
  locale
}: {
  locale: LocaleCode
}) {
  const t = I18n.create_trans(locale)

  return (
    <section className="section section--move-innovation-with-starcoin">
      <div id="move-innovation-with-starcoin" className="section__container move-innovation-with-starcoin__container">
      <div className="section__title" dangerouslySetInnerHTML={{__html: t('developers.move_innovation_with_starcoin.title')}} data-aos="fade-right"></div>
      <div className="section__content">
        <p data-aos="fade-right">{t('developers.move_innovation_with_starcoin.desc')}</p>
        <div className="card" data-aos="fade-up">
         <div className="card">
          <h4>{t('developers.move_innovation_with_starcoin.card1.h4')}</h4>
          <p>{t('developers.move_innovation_with_starcoin.card1.p')}</p>
         </div>
         <div className="card">
          <h4>{t('developers.move_innovation_with_starcoin.card2.h4')}</h4>
          <p>{t('developers.move_innovation_with_starcoin.card12.p')}</p>
         </div>
         <div className="card">
          <h4>{t('developers.move_innovation_with_starcoin.card3.h4')}</h4>
          <p>{t('developers.move_innovation_with_starcoin.card3.p')}</p>
         </div>
        </div>
      </div>
      </div>
      
    </section>
  );
}
