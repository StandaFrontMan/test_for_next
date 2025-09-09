import { useState } from 'react'

export function ContentWrapper({
  mouseEnterCallback,
  children,
}: {
  mouseEnterCallback: () => void
  children: React.ReactNode
}) {
  const [isActive, setActive] = useState(false) // можно запариться и написать хук

  const mouseEnterHandler = () => {
    setActive(true)
    mouseEnterCallback()
  }

  return (
    <div onMouseEnter={mouseEnterHandler} className={isActive ? 'active' : ''}>
      {children}
    </div>
  )
}

// Подход FSD все решает как в плане оптимизона, так и в плане удобства работы
