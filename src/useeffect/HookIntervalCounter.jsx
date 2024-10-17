import { useState, useEffect } from "react"

function HookIntervalCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prev => prev + 1)
    }

    useEffect(() => {

        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <h1>Hook Interval Counter - {count}</h1>
        </div>
    )
}

export default HookIntervalCounter