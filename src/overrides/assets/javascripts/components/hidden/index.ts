import {
  Observable,
  Subject,
  defer,

  filter,
  finalize,
  map,
  merge,
  take,
  tap
} from "rxjs"

import {
  getElements,

  watchElementVisibility
} from "~/browser"

import {
  Component,
} from "../_"

/* ----------------------------------------------------------------------------
 * Types
 * ------------------------------------------------------------------------- */

/**
 * Hidden
 */
export interface Hidden {
  active: HTMLElement                  /* Active hidden element */
}

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Watch hidden
 *
 * @param el - Hidden element
 *
 * @returns Hidden observable
 */
export function watchHidden(
  el: HTMLElement
): Observable<Hidden> {
  return merge(
    ...getElements(":scope [hidden]", el)
      .map(child => watchElementVisibility(child)
        .pipe(
          filter(visible => visible),
          take(1),
          map(() => ({ active: child }))
        )
      )
  )
}

/**
 * Mount hidden
 *
 * @param el - Hidden element
 *
 * @returns Hidden component observable
 */
export function mountHidden(
  el: HTMLElement
): Observable<Component<Hidden>> {
  return defer(() => {
    const push$ = new Subject<Hidden>()
    push$.subscribe(({ active }) => {
      active.hidden = false
    })

    return watchHidden(el)
      .pipe(
        tap(state => push$.next(state)),
        finalize(() => push$.complete()),
        map(state => ({ ref: el, ...state }))
      )
  })
}
