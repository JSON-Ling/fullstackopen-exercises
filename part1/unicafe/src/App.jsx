import { useState } from 'react'

const Header = (props) => <h1>{props.text}</h1>

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>{props.text}</button>
    )
}

const StatisticLine = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const Statistics = (props) => {
    const average =  (props.goodval - props.badval) / 9
    const positiveVotes = (100 * props.goodval) / 9
    const total = props.goodval + props.badval + props.neutralval

    if (total === 0) {
        return (
            <div>
                No feedback given.
            </div>
        )
    }
    return (
        <table>
            <tbody>
                <tr>
                    <td><StatisticLine text="good" value={props.goodval}/></td>
                </tr>
                <tr>
                    <td><StatisticLine text="neutral" value={props.neutralval}/></td>
                </tr>
                <tr>
                    <td><StatisticLine text="bad" value={props.badval}/></td>
                </tr>
                <tr>
                    <td><StatisticLine text="total" value={total}/></td>
                </tr>
                <tr>
                    <td><StatisticLine text="average (%)" value={average}/></td>
                </tr>
                <tr>
                    <td><StatisticLine text="positive votes (%)" value={positiveVotes}/></td>
                </tr>
            </tbody>
        </table>

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
            <Button handleClick={handleGood} text="Good"/>
            <Button handleClick={handleNeutral} text="Neutral" />
            <Button handleClick={handleBad} text="Bad"/>
            <Header text="Statistics" />
            <Statistics goodval={good} badval={bad} neutralval={neutral}/>
        </div>
    )
}

export default App