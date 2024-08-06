const Header = ({ course }) => {
    return (<h1>{course}</h1>);
}

const Part = ({ exercise, idx }) => {
    return (
        <p key={idx}>{exercise.part} {exercise.n}</p>
    )
}

const Content = ({ exercises }) => {
    return (
        <div>
            {exercises.map((item, idx) => (
                < Part exercise={item} idx={idx} />
            ))}
        </div >
    )
}

const Total = ({ exercises }) => {
    let totalcount = 0;
    exercises.forEach((item) => {
        totalcount += item.n
    });
    return (
        <p>
            Number of exercises {totalcount}
        </p>
    );
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }


    // Stucture:
    return (
        <div>
            <Header course={course.name} />
            <Content exercises={course.parts} />
            <Total exercises={course.parts} />
        </div>
    )
}

export default App
