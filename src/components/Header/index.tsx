
import Social from "@/components/Social";
import Navigation from "@/components/Navigation";
import Hamburg from "@/components/Hamburg";
import LanguageDropdownMenu from "@/components/LanguageDropdownMenu";

import { useState, useEffect, type MouseEvent } from "react";
import { getRelativeLocaleUrl, type LocaleCode } from "@/i18n";
import clsx from "clsx";

export default function Header({
  locale
}: {
  locale: LocaleCode
}) {

  const [nav_show, set_nav_show] = useState(false)

  function change_nav_show(s: boolean) {
    set_nav_show(s)
  }

  function stop_click(evt: MouseEvent) {
    evt.stopPropagation()
  }

  useEffect(() => {
    let close_timer: NodeJS.Timeout
    function close() {
      clearTimeout(close_timer)
      close_timer = setTimeout(() => {
        set_nav_show(false)
      }, 50)
    }

    window.addEventListener('click', close)
    window.addEventListener('scroll', close, {
      passive: true
    })

    return () => {
      window.removeEventListener('click', close)
      window.removeEventListener('scroll', close)
    }
  }, [])

  return (
    <header className="page--header">
      <div className="header__container section__container" onClick={stop_click}>
        <h1 id="logo" className="logo">
          <a href={getRelativeLocaleUrl(locale, '/')}>
            <svg>
              <use xlinkHref="#logo" href="#logo" />
            </svg>
          </a>
        </h1>
        <div className={clsx('nav--wrapper', {open: nav_show})}>
          <Navigation locale={locale} />
          <div className="item">
            <Social />
            <LanguageDropdownMenu locale={locale} />
          </div>
        </div>

        <Hamburg pressed={nav_show} onChange={change_nav_show} />
      </div>
    </header>
  );
}
