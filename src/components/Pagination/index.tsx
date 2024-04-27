import { Fragment } from "react";
import clsx from "clsx";
import { reorganizePageNumber } from "@/assets/reorganize-tools.js";


import "./index.css";

export default function Pagination({
  total,
  page,
  pageSize = 10,
  path,
  slug = "page/",
}: {
  total: number;
  page: number | string | undefined;
  pageSize?: number;
  path: string;
  slug?: string
}) {
  page = reorganizePageNumber(page);

  const pages = [];
  const totalPage = Math.ceil(total / pageSize);

  /**
   * maxLinks
   * - Maximum number of paging links
   */
  const maxLinks = 10;
  /**
   * queueLinkNumber
   * - Number of dynamic links in the center section
   * - The number needs to be odd in order to be evenly divided from the middle anchor point
   * - The `2` in `totalPage - 2` is the special first and last page.
   */
  const queueLinkNumber = Math.max(0, maxLinks - 2);
  const pageStep = Math.ceil(queueLinkNumber / 2);

  const start = Math.max(2, page - pageStep);
  const end = Math.min(Math.max(totalPage - 1, 1), Math.max(page + pageStep -1, queueLinkNumber));

  // If there is no more than one page, no paging is displayed
  if (totalPage) {
    // Add the more specific first page first
    pages.push({
      number: 1,
      href: `${path}`,
    });

    if (start > 2) {
      pages.push({
        ellipsis: "start",
      });
    }

    for (let i = start; i <= end; i++) {
      pages.push({
        number: i,
        href: `${path}${slug}${i}`,
      });
    }

    if (totalPage - end > 1) {
      pages.push({
        ellipsis: "end",
      });
    }
    
    if (totalPage > 1) {
      pages.push({
        number: totalPage,
        href: `${path}${slug}${totalPage}`,
      });
    }
  }

  return (
    <div className="pagination">
      <div className="pagination-main">
        {pages.map((p) => {
          return (
            <Fragment key={p.number || p.ellipsis}>
              {p.ellipsis ? (
                <span className="pagination-ellipsis">...</span>
              ) : (
                <a
                  className={clsx("pagination-link", {
                    active: page === p.number,
                  })}
                  href={p.href}
                >
                  {p.number}
                </a>
              )}
            </Fragment>
          );
        })}
      </div>

      {pages.length ? (
        <div className="pagination-aside">
          Total: <strong>{totalPage}</strong>
        </div>
      ) : null}
    </div>
  );
}
