import { useState } from 'react'

export default function useToggle(open = false) {
  const [active, setActive] = useState(open)
  const toggle = () => setActive((prev) => !prev)
  const on = () => setActive(true)
  const off = () => setActive(false)

  return {
    active,
    toggle,
    on,
    off,
  }
}
