import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (props.all == 0) {
    return (
      <div>
        No Feedback Given
      </div>
    )
  }
  return(
    <table>
      <StatisticLine name="good" value = {props.good}/>
      <StatisticLine name="neutral" value = {props.neutral}/>
      <StatisticLine name="bad" value = {props.bad}/>
      <StatisticLine name="all" value = {props.all}/>
      <StatisticLine name="average" value = {props.average}/>
      <StatisticLine name="positive" value = {props.positive+'%'}/>
    </table>
  )
}

const StatisticLine = ( { name, value } ) => {
  return(
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{value}</td>
        </tr>
      </tbody>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = (good + bad + neutral)
  let average = ((good - bad) / all).toFixed(1)
  let positive = ((good/all) * 100).toFixed(1)

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={() => setGood( good + 1 )} text="good" />
      <Button handleClick={() => setNeutral( neutral + 1 )} text="neutral" />
      <Button handleClick={() => setBad( bad + 1 )} text="bad" />
      <h1>Statistics</h1>
      <Statistics
        all = {all} 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        average = {average}
        positive = {positive}
      />
    </div>
  )
}

export default App
