import { useState } from 'react';

const Statistics = (props) => {
  const [good, neutral, bad] = props.stats;
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positivePercentage = (good / all) * 100;

  if (all === 0) {
    return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>Good:</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>Neutral:</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>Bad:</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>All:</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>Average:</td>
            <td>{average.toFixed(1)}</td>
          </tr>
          <tr>
            <td>Positive:</td>
            <td>{positivePercentage.toFixed(1)}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <Statistics stats={[good, neutral, bad]} />
    </div>
  );
};

export default App;