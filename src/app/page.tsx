'use client'

import { type EventEmitType } from "@/lib/services/layout.service"
import LandingPage from './landingpage'

export default function Home() {
  const clickIt = (type: EventEmitType) => {
    console.log(type)
  }
  return (
    <LandingPage
      lang="en"
      is_show_header_footer={true}
      is_registration={true}
      event_emit={(type) => clickIt(type)}
    />
  )
}
