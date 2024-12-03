import React from 'react'

/**
 * A hook to toggle a boolean state
 */
export const useToggle = (initialState: boolean) => {
  const [state, setState] = React.useState(initialState)

  const toggle = React.useCallback(() => setState((prev) => !prev), [])

  return [state, toggle] as const
}
