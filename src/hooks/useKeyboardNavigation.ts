import { useEffect, useState } from 'react'

const KEY_ARROW_UP = 'ArrowUp'
const KEY_ARROW_DOWN = 'ArrowDown'
const KEY_ENTER = 'Enter'

const useKeyboardNavigation = <T>(items: T[]) => {
  const [selectedIdx, setSelectedIdx] = useState(-1)
  const [selectedItem, setSelectedItem] = useState<T | null>(null)

  const startIdx = 0
  const endIdx = items.length - 1

  const selectIndexByKeyDown = (e: React.KeyboardEvent) => {
    if (!e.nativeEvent.isComposing && items.length > 0) {
      if (e.key === KEY_ARROW_UP) {
        e.preventDefault()
        setSelectedIdx(selectedIdx > startIdx ? selectedIdx - 1 : endIdx)
      } else if (e.key === KEY_ARROW_DOWN) {
        e.preventDefault()
        setSelectedIdx(selectedIdx < endIdx ? selectedIdx + 1 : startIdx)
      } else if (e.key === KEY_ENTER) {
        e.preventDefault()
        setSelectedItem(items[selectedIdx])
      }
    }
  }

  useEffect(() => {
    setSelectedIdx(-1)
    setSelectedItem(null)
  }, [items])

  return { selectedIdx, selectIndexByKeyDown, selectedItem }
}

export default useKeyboardNavigation
