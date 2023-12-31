import React, {useState} from 'react'

function HooksCounterTwo() {
    const initialCount = 0
  const [count, setCount] = useState(initialCount)

  const incrementFive = ()=>{
    for(let i= 0; i< 5; i++){
        setCount(prevState => prevState + 1)
    }
  }
  return (
    <div>
        Count: {count}
        <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
        <button onClick={() => setCount(prevState => prevState - 1)}>Deccrement</button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={incrementFive}>Increment 5</button>

    </div>
  )
}

export default HooksCounterTwo