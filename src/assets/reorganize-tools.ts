// @ts-nocheck
import I18n from "@/i18n";
import { isNumber } from "radash";

export function reorganizePostSlug(p) {
  const { id } = p;
  const slug_array = id.split(".");
  let slug = slug_array.slice(0, -1);

  const lc = slug_array.at(-2);
  if (I18n.config.locales.includes(lc)) {
    slug = slug_array.slice(0, -2);
  }

  return slug.join("").toLowerCase();
}

export function reorganizePosts(posts: any[] = [], locale) {
  posts = posts.filter((p) => {
    // Draft filtration in product environments
    if (import.meta.env.PROD && p.draft) {
      return false;
    }

    /**
     * Filtering related documents by `locale`
     * - If the filename does not have a language suffix, it is taken as the default language.
     * - Filenames like `release_starcoin_v0.3.md` resolve to the wrong `locale` value, which is treated as if there were no `locale`.
     */
    const { id } = p;
    const [seg_1, seg_2] = id.split(".").slice(-2);
    let lc = seg_2 ? seg_1 : "";
    if (lc && I18n.config.locales.includes(lc) === false) {
      lc = "";
    }

    if (!lc && locale !== I18n.config.default) {
      return false;
    }

    if (lc && lc !== locale) {
      return false;
    }

    return true;
  });

  /**
   * Sort files by `date`
   */
  posts.sort((a, b) => {
    if (a.data.date > b.data.date) {
      return -1;
    }
    if (a.data.date < b.data.date) {
      return 1;
    }
    return 0;
  });

  return posts;
}

export function reorganizePageNumber(page: number | string | undefined) {
  if (isNumber(page) === false) {
    const pp = /\d+/.exec(page || "");
    if (pp) {
      page = pp[0];
    }
  }
  page = Number(page);
  if (Number.isFinite(page) === false) {
    page = 1;
  }

  return page;
}

export function reorganizeItemsByPage(
  items: any[],
  page: number,
  pageSize: number = 10
) {
  const start = Math.max(0, page - 1) * pageSize;
  const end = page * pageSize;
  return items.slice(start, end);
}
