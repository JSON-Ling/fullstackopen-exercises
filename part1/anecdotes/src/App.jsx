import { useState } from 'react'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.handleClick}>{props.text}</button>
        </div>

    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

    const getRandom = () => {
        const randVal = Math.floor(Math.random() * (anecdotes.length)) //get random number based on length of array
        setSelected(randVal)
        // console.log("random num " + selected)
        // console.log("length of array " + anecdotes.length)
        console.log(selected)
    }

    const castVote = () => {
        //map index value of anecdotes and score.
        const pointsCopy = [...points]
        pointsCopy[selected] = pointsCopy[selected] + 1
        setPoints(pointsCopy)
        console.log(pointsCopy)

        // add votes to selected
    }

    return (
        <div>
            {anecdotes[selected]}
            <Button handleClick={getRandom} text="next anecdote" />
            <Button handleClick={castVote} text="vote"/>
        </div>
    )
}

export default App