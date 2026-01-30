import { useEffect, useState } from 'react'
import hourglass from '../assets/hourglass.png'
import astronaut from '../assets/astronaut.png'
import stone from '../assets/stone.png'
import crystal from '../assets/crystal.png'
const FloatingCharacters = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      // tiny movement only — Discord-style restraint
      setOffset(window.scrollY * 0.05)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {/* Character 1 */}
      <img
        src={hourglass}
        alt="hourglass"
        className="absolute w-32 opacity-90 animate-float"
        style={{
          top: '20%',
          left: '15%',
          transform: `translateY(${offset}px)`
        }}
      />

      {/* Character 2 */}
      <img
        src={astronaut}
        alt="keyboard"
        className="absolute w-40 opacity-80 animate-float-slow"
        style={{
          bottom: '15%',
          right: '10%',
          transform: `translateY(${-offset}px)`
        }}
      />

       {/* Character 3
      <img
        src={crystal}
        alt="crystal"
        className="absolute w-40 opacity-80 animate-float-slow"
        style={{
          bottom: '60%',
          right: '10%',
          transform: `translateY(${-offset}px)`
        }}
      /> */}
    </div>
  )
}

export default FloatingCharacters