import React from 'react'
import { atom, useAtom } from 'jotai'

const toggleGlobalSearchAtom = atom(false)

export const useToggleGlobalSearch = () => {
  const [isOpen, setIsOpen] = useAtom(toggleGlobalSearchAtom)

  const handleToggle = React.useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  return [isOpen, handleToggle] as const
}
