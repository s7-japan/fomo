'use client'

import { getEventEmitterS } from '../lib/services/event.service'
import { ngEffect } from '../lib/common/preact-ng-signals'
import LandingPage from './landingpage'

const eventEmitterS = getEventEmitterS()

ngEffect(() => {
  console.log(eventEmitterS())
})

export default function Home() {
  return <LandingPage lang="en" is_show_header_footer={true} />
}
