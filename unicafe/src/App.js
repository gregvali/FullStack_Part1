import { useState } from 'react'

const Display = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = (good + bad + neutral);

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={() => setGood( good + 1 )} text="good" />
      <Button handleClick={() => setNeutral( neutral + 1 )} text="neutral" />
      <Button handleClick={() => setBad( bad + 1 )} text="bad" />
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(good - bad) / all}</p>
      <p>postive {(good/all * 100)} %</p>
    </div>
  )
}

export default App