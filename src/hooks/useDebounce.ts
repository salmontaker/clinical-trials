import { useEffect, useState } from 'react'

export const DEBOUNCE_DELAY_MS = 250

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value])

  return debouncedValue
}

export default useDebounce
