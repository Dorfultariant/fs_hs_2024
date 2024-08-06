import { useState } from 'react'

const MyButton = (props) => {

    return (
        <div>
            <button onClick={props.clicker}>{props.name}</button>
        </div>
    );
}

const MyAnecdote = (props) => {
    if (props.anecdote.name == null) return (<p></p>);
    return (
        <div>
            <p>"{props.anecdote.name}" has {props.anecdote.votes} votes.</p>
        </div>
    );
}

const MostVotes = (props) => {

    return (
        <div>
            <p>{props.anecdote.votes}</p>
        </div>
    );
}

const App = () => {

    // This OG is not used:
    const ex_anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
        'The only way to go fast, is to go well.'
    ];

    // Own object list:
    const own = [{
        name: 'If it hurts, do it more often.',
        votes: 0,
    }, {
        name: 'Adding manpower to a late software project makes it later!',
        votes: 0
    }, {
        name: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        votes: 0
    }, {
        name: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        votes: 0
    }, {
        name: 'Premature optimization is the root of all evil.',
        votes: 0
    }, {
        name: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        votes: 0
    }, {
        name: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
        votes: 0
    }, {
        name: 'The only way to go fast, is to go well.',
        votes: 0
    }];


    // Seemed better choice than what I had in mind...
    // src: https://react.dev/reference/react/useState#updating-objects-and-arrays-in-state
    const [anecdotes, setAnecdotes] = useState(own);        // All anecs so change can update view
    const [selected, setSelected] = useState(anecdotes[0]); // Currently selected as its own

    // Select random
    const clicker = () => {
        setSelected(own[Math.floor(Math.random() * anecdotes.length)]);
    }

    const vote = () => {
        const voted = anecdotes.map(a => a.name === selected.name ? { ...a, votes: a.votes + 1 } : a);
        setAnecdotes(voted);
        setSelected({ ...selected, votes: selected.votes + 1 });
    }

    // Select most voted:
    let m_voted = anecdotes[0];
    anecdotes.forEach((a) => {
        m_voted = (m_voted.votes < a.votes) ? a : m_voted;
    });

    return (
        <div>
            <h1> Anecdote</h1>
            <MyButton clicker={clicker} name="Random Anecdote" />
            <MyAnecdote anecdote={selected} />
            <MyButton clicker={vote} name="Vote" />
            <h2>Anecdote with most votes</h2>
            <MyAnecdote anecdote={m_voted} />
        </div>
    )
}

export default App;
