import { ngComputed, ngSignal } from '../common/preact-ng-signals'

export type EventEmitterObjectType = {
  type: 'signUp' | 'gotoCasino' | 'gotoBonusTerms'
  info?: string | object
}

const eventEmitterS = ngSignal<EventEmitterObjectType | null>(null)
export const getEventEmitterS = () => ngComputed(() => eventEmitterS())
export const setEventEmitterS = (v: EventEmitterObjectType) => eventEmitterS.set(v)
