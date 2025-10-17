import { ngComputed, ngSignal } from '../common/preact-ng-signals'

declare var Typekit: any

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
      tk = d.createElement('script') as any,
      f = false,
      s = d.getElementsByTagName('script')[0] as any,
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

const isShowHeaderFooterS = ngSignal(true)
export const getIsShowHeaderFooter = () => ngComputed(() => isShowHeaderFooterS())
export const setIsShowHeaderFooter = (v: boolean) => isShowHeaderFooterS.set(v)
