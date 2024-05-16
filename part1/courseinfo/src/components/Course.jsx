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
        <div>
            {
                parts.map(
                    (item) => (
                        <Part key={item.id} name={item.name} exercises={item.exercises} />
                    )
                )
            }
        </div>
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
        <>
            {
                course.map(
                    (item) => {
                        return (
                            <div key={item.id}>
                                <Header course={item.name}/>
                                <Content parts={item.parts}/>
                                <Total parts={item.parts}/>
                            </div>
                        )
                    }
                )
            }
        </>

    )
}

export default Course