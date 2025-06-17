import { useState } from 'react'

const Button = ({handleclick,text}) => <button onClick={handleclick}>{text}</button>
const Vote= ({votes,selected})=>{ 
  return ( 
    <p>has {votes[selected]?votes[selected]:0} vote</p>
  )

}
const App = () => {
  const [votes,setvotes] = useState({})
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
  const generatevote = ()=> { 
    const copy = {...votes}
    if (copy[selected]) { 
      copy[selected]+=1
    }
    else { 
    copy[selected] = 1
    } 
    setvotes(copy);
    console.log(copy)
  }
  const generateindex= () => { 
    const selected = Math.floor(Math.random()*8)
    console.log(selected)
    setSelected(selected)
  }
  const [selected, setSelected] = useState(0)
  let maxindex=0
  let maxvotes=0 
  for (let anecdote in votes) { 
      if (votes[anecdote]>maxvotes){ 
        maxindex = anecdote;
        maxvotes=votes[anecdote]
      }
    }
  

  return (
    <div>
    <div>
      <b>Anecdote of the day</b>
      <p>{anecdotes[selected]}</p>
      <Vote  votes={votes} selected={selected}/>
    </div>
    <div>
      <Button handleclick={generatevote} text ="vote" /> 
      <Button handleclick={generateindex} text="new anecdote" /> 
    </div>
    <div>
      <b>Anecdote with most votes</b>
      <p>{anecdotes[maxindex]}</p>
      <Vote votes={votes} selected={maxindex}/>

    </div>
    </div>
    
  )
}

export default App