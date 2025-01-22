// https://github.com/mui/base-ui/blob/master/packages/react/src/utils/useControlled.ts

"use client"

import * as React from "react"

export interface UseControlledProps<T = unknown> {
  /**
   * Holds the component value when it's controlled.
   */
  controlled: T | undefined
  /**
   * The default value when uncontrolled.
   */
  default: T | undefined
  /**
   * The function to call when the value changes.
   */
  onChange?: (newValue: any | ((prevValue: any) => any)) => void
}

export function useControlled<T = unknown>({
  controlled,
  default: defaultProp,
  onChange,
}: UseControlledProps<T>): [T, (newValue: T | ((prevValue: T) => T)) => void] {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const { current: isControlled } = React.useRef(controlled !== undefined)
  const [valueState, setValue] = React.useState(defaultProp)
  const value = isControlled ? controlled : valueState

  const setValueIfUncontrolled = React.useCallback(
    (newValue: React.SetStateAction<T>) => {
      if (!isControlled) {
        setValue(newValue as T)
      }
      onChange?.(newValue)
    },
    []
  )

  return [value as T, setValueIfUncontrolled]
}
