import Course from "./components/Course.jsx";

const App = () => {
    const course= [
        {
            id: 1,
            name: 'Half Stack application development',
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 5
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 6
                }
            ]
        },
        {
            name: 'Express.js',
            id: 3,
            parts: [
                {
                    name: 'Routing',
                    exercises: 10,
                    id: 7
                },
                {
                    name: 'Middlewares',
                    exercises: 8,
                    id: 8
                }
            ]
        }
    ]


    return (
        <div>
            <Course course={course}/>
        </div>
    )
}

export default App