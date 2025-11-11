import { getIsShowClarityScript } from '../services/layout.service'
import { useSignals } from '@preact/signals-react/runtime'
import { useEffect } from 'react'

const isShowClarityScriptS = getIsShowClarityScript()

export default function App() {
  useSignals()

  useEffect(() => {
    let script: HTMLScriptElement
    if (isShowClarityScriptS()) {
      script = document.createElement('script')
      script.type = 'text/javascript'
      script.innerHTML = `
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "u0hhgckxig"); 
      `
      document.head.appendChild(script)
    }

    return () => {
      if (script) {
        document.head.removeChild(script)
      }
    }
  })

  return <></>
}
