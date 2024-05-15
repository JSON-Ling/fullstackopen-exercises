const Header = (props) => {

    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>{props.name} {props.exercises}</p>
        </>
    )
}

const Content = ({parts}) => {
    return (
        <>
            {
                parts.map(
                    (item) => (
                        <>
                            <Part name={item.name} exercises={item.exercises} />
                        </>
                    )
                )
            }
        </>
    )
}

const Total = ({parts}) => {
    const total = parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        0,
    )
    return (
        <>
            <p><strong>Number of exercises {total}</strong></p>
        </>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course[0].name} />
            <Content parts={course[0].parts}/>
            <Total parts={course[0].parts}/>

            <Header course={course[1].name} />
            <Content parts={course[1].parts} />
            <Total parts={course[1].parts}/>
        </div>

    )
}

export default Course