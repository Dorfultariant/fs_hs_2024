import { useState } from 'react'

const MyButton = ({ title, onclicker }) => {

    return (
        <div>
            <button onClick={onclicker}>{title}</button>
        </div>
    );
}

const calc_stats = (stats) => {
    let total = (stats.good.value + stats.neutral.value + stats.bad.value);

    if (total === 0) return stats;

    let avg = (stats.good.value * 1 + stats.neutral.value * 0 + stats.bad.value * (-1)) / total;
    let pos = ((stats.good.value) / total) * 100 + "%";

    return {
        ...stats,
        total: { name: "All", value: total },
        avg: { name: "Average", value: avg },
        pos: { name: "Positive", value: pos }
    };
}

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td> {props.value}</td>
        </tr>
    );
}

const Statistics = ({ stats }) => {
    // compute statistical values:
    stats = calc_stats(stats);
    if (stats.total === undefined) {
        return (<p>No feedback given</p>);
    }

    return (
        <table>
            <tbody>
                <StatisticLine text={stats.good.name} value={stats.good.value} />
                <StatisticLine text={stats.neutral.name} value={stats.neutral.value} />
                <StatisticLine text={stats.bad.name} value={stats.bad.value} />
                <StatisticLine text={stats.total.name} value={stats.total.value} />
                <StatisticLine text={stats.avg.name} value={stats.avg.value} />
                <StatisticLine text={stats.pos.name} value={stats.pos.value} />
            </tbody>
        </table>
    );
}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setToGood = () => {
        setGood(good + 1);
    }
    const setToNeutral = () => {
        setNeutral(neutral + 1);
    }
    const setToBad = () => {
        setBad(bad + 1);
    }
    return (
        <div>
            <h1>Give Feedback</h1>
            <MyButton title={"good"} onclicker={setToGood} />
            <MyButton title={"neutral"} onclicker={setToNeutral} />
            <MyButton title={"bad"} onclicker={setToBad} />

            <h2>Stats:</h2>
            <Statistics stats={{ good: { name: "Good", value: good }, neutral: { name: "Neutral", value: neutral }, bad: { name: "Bad", value: bad } }} />
        </div>
    )
}

export default App
