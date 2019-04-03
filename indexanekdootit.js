import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const votes = Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0);
let mostVotes = votes[0]

const Button = (props) => 
        <button onClick={props.handleClick}> {props.text}</button>

const Votes = (props) => {
    return (

        <>
        <p>
        Has {props.howMany} votes
        </p>   
        </>
    )
     
}        

const Valiotsikko = () => {
    return (
        <>
        <h1>Anecdote with most votes</h1>
        </>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  {/*const votes = Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0);
  */} 
  

  const handleNextClick =() => {
    console.log("nappia painettu")
    const min = 0
    const max = 5
    const rand =  Math.floor(Math.random() * (max - min + 1)) + min
    console.log(rand)
    setSelected(rand)
    
}


const handleVoteClick =() => {
    console.log("vote clicked")
    const copy = [...votes]
    copy[selected] += 1
    console.log(copy)
    votes[selected] = copy[selected]
    console.log("votes ",votes)
    handleMostVotes()
}
const handleMostVotes =() => {
    for (let i = 0; i < votes.length; i++) {
        if (i !== 0  && votes[i] > votes[i-1]) {
            mostVotes = votes.indexOf(votes[i])
        }
    }
    console.log(mostVotes)
}

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <Votes howMany={votes[selected]} />
      <div>
      <Button handleClick={handleVoteClick} text='vote' /> 
      <Button handleClick={handleNextClick} text='next anecdote'/>
      </div>
      <Valiotsikko />
      {props.anecdotes[mostVotes]}
      <Votes howMany={votes[mostVotes]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
