import {useEffect, useState} from 'react'

const useMouse = () => {
  const [mouse, setMouse] = useState({})
  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'mouseup']
    const handleMouseEvent = event => {
      const {
        altKey,
        clientX,
        clientY,
        ctrlKey,
        metaKey,
        movementX,
        movementY,
        screenX,
        screenY,
        pageX,
        pageY,
        shiftKey,
        buttons
      } = event
      setMouse({
        position: {
          client: {x: clientX, y: clientY},
          page:   {x: pageX,   y: pageY},
          screen: {x: screenX, y: screenY}
        },
        movement: {x: movementX, y: movementY},
        buttons: {
          left:   [1, 3, 5, 7].includes(buttons),
          right:  [2, 3, 6, 7].includes(buttons),
          middle: [4, 5, 6, 7].includes(buttons)
        },
        keyboard: {
          alt:   altKey,
          ctrl:  ctrlKey,
          meta:  metaKey,
          shift: shiftKey,
        }
      })
    }
    events.forEach(eventType => {
      document.addEventListener(eventType, handleMouseEvent)
    })
    return () => {
      events.forEach(eventType => {
        document.removeEventListener(eventType, handleMouseEvent)
      })  
    }
  }, [])
  return mouse
}

export default useMouse
