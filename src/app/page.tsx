'use client'

import LandingPage, { EventEmitType } from './landingpage'

export default function Home() {
  const clickIt = (type: EventEmitType) => {
    console.log(type)
  }
  return <LandingPage lang="en" is_show_header_footer={true} event_emit={(type) => clickIt(type)} />
}
