import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const Statistics = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        const updatedGood = good + 1
        setGood(updatedGood)
    }

    const handleBad = () => {
        const updatedBad = bad + 1
        setBad(updatedBad)
    }

    const handleNeutral = () => {
        const updatedNeutral = neutral + 1
        setNeutral(updatedNeutral)
    }

    return (
        <div>
            <Header text="Give feedback"/>
            {good}
            <Button handleClick={handleGood} text="Set good"/>
            {neutral}
            <Button handleClick={handleNeutral} text="Set neutral" />
            {bad}
            <Button handleClick={handleBad} text="Set bad"/>
            <Header text="Statistics" />
            <Statistics text="good" value={good}/>
            <Statistics text="neutral" value={neutral}/>
            <Statistics text="bad" value={bad}/>
        </div>
    )
}

export default App