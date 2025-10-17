import {
  signal as preactLibSignal,
  computed as preactLibComputed,
  effect as preactLibEffect,
  untracked as preactLibUntracked,
} from '@preact/signals-core'

export function ngSignal<T>(initialValue: T) {
  const sourceSignal = preactLibSignal(initialValue)

  const getter = () => sourceSignal.value

  getter.set = (newValue: T): void => {
    sourceSignal.value = newValue
  }

  getter.update = (updateFn: (value: T) => T): void => {
    sourceSignal.value = updateFn(sourceSignal.value)
  }

  getter.mutate = (mutatorFn: (value: T) => void): void => {
    mutatorFn(sourceSignal.value)
    sourceSignal.value = sourceSignal.value
  }

  return getter
}

export function ngComputed<T>(computation: () => T) {
  const sourceComputed = preactLibComputed(computation)
  return () => sourceComputed.value
}

export function ngEffect(effectFn: () => void) {
  const dispose = preactLibEffect(effectFn)
  return {
    destroy: dispose,
  }
}

export function ngUntracked<T>(fn: () => T): T {
  // 直接轉發 Preact Signals 的 untracked 函數，它們的 API 完全相同。
  return preactLibUntracked(fn)
}
