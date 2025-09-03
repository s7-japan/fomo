import { MouseEvent } from 'react'

export interface IAppEvent {
  event_emit: (type: EventEmitType) => void
}

export type EventEmitType = 'signUp' | 'gotoCasino' | 'gotoBonusTerms'

export const CDN_TMP = 'https://fomoio.netlify.app'

export const addAdobeFonts = () => {
  ;(function (d) {
    var config = {
        kitId: 'gxi8jdk',
        scriptTimeout: 3000,
        async: true,
      },
      h = d.documentElement,
      t = setTimeout(function () {
        h.className = h.className.replace(/\bwf-loading\b/g, '') + ' wf-inactive'
      }, config.scriptTimeout),
      tk = d.createElement('script'),
      f = false,
      s = d.getElementsByTagName('script')[0],
      a
    h.className += ' wf-loading'
    tk.src = 'https://use.typekit.net/' + config.kitId + '.js'
    tk.async = true
    tk.onload = tk.onreadystatechange = function () {
      a = this.readyState
      if (f || (a && a != 'complete' && a != 'loaded')) return
      f = true
      clearTimeout(t)
      try {
        Typekit.load(config)
      } catch (e) {}
    }
    s.parentNode.insertBefore(tk, s)
  })(document)
}

export const singUp = (props: IAppEvent) => (e: MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  props.event_emit('signUp')
}

export const gotoLink =
  (props: IAppEvent) => (e: MouseEvent<HTMLButtonElement>, type: EventEmitType) => {
    e.preventDefault()
    props.event_emit(type)
  }
