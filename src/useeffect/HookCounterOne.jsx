/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Updating documet titel - useEffect'); 
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>click {count} times</button>
        </div>
    )
}

export default HookCounterOne