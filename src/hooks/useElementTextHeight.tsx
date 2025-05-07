import { useEffect, useRef, useState } from 'react';

export const useElementTextHeight = <T extends HTMLElement>() => {
  const elementRef = useRef<T | null>(null)
  const [height, setHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    const updateHeight = () => {
      if (elementRef.current) {
        console.log(elementRef.current.getBoundingClientRect());
        const elementHeight = elementRef.current.getBoundingClientRect().height
        setHeight(elementHeight)
      }
    }


    window.addEventListener('resize', updateHeight)

    updateHeight()

    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [elementRef?.current])

  return { ref: elementRef, height }
}
