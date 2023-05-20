import { useState } from 'react';
import Statistics from './Statistics/statistics';
import FeedbackOptions from './FeedBack/feedback';
import Section from './Section/section';
import Notification from './Notification/notification';

 export  const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [hasFeedback, setHasFeedback] = useState(false);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positive = good;
    return total ? Math.round((positive / total) * 100) : 0;
  };

  
  const addGood = () => {
    setGood(prevGood => prevGood + 1);
    setHasFeedback(true);
  };

  
  const addNeutral = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
    setHasFeedback(true);
  };

  
  const addBad = () => {
    setBad(prevBad => prevBad + 1);
    setHasFeedback(true);
  };

  return (
    <div>
      <Section>
        <h2>Please leave feedback</h2>
      </Section>
      <Section>
        <FeedbackOptions
          clickGood={addGood}
          clickNeutral={addNeutral}
          clickBad={addBad}
        />
      </Section>
      {hasFeedback ? (
        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      )}
    </div>
  );
};

