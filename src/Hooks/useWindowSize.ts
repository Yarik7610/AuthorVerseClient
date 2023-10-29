import { useEffect, useState } from 'react'

interface IState {
  width: number
  height: number
}
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<IState>({
    width: window.innerWidth,
    height: window.innerHeight
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return windowSize
}
