import React, { useEffect, useState } from 'react'

function IntervalCounterHook() {
    const [count, setCount] = useState(0)

    const tick = () =>{
        setCount(count + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
           clearInterval (interval)
        }
    }, [])
  return (
    <div>
        {count}
    </div>
  )
}

export default IntervalCounterHook