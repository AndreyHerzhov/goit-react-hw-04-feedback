import React, {  useState } from "react";
import FeedbackOptions from "./atoms/FeedbackOptions/FeedbackOptions";
import Statistics from "./atoms/Statistics/Statistics"
import Notification from "./atoms/Notification/Notification";
import Section from "./atoms/Section/Section"


export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0) 

  const countTotalFeedback = () => {
    return  bad +  good +  neutral 
  }

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback =  countTotalFeedback()
    const positive =  good
    const positivePercentage = positive/totalFeedback * 100
    if(!positivePercentage) {
      return 0
    } else {
      const positiveFeedbackPercentage = positivePercentage.toFixed(0)
      return positiveFeedbackPercentage
    }
    
  }

  const handleClick = (e) => {
    const key = e.target.name
    
    if(key === 'good') {
      setGood(prevGood => prevGood + 1)
    } else if(key === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1)
    } else {
      setBad(prevBad => prevBad + 1)
    }
   
  }


  const options = ['good','neutral','bad']
 
  return (
   <>  
             
      <Section title="Please leave feedback">
            <FeedbackOptions 
                      options={options} 
                      onLeaveFeedback={handleClick}
            />
      </Section>
        
    
      {!countTotalFeedback() > 0
        ?  <Notification message="There is no feedback"/>
        :  <Section title="Statistics">
       
          <Statistics good={Number(good)} 
                      neutral={Number(neutral)} 
                      bad={Number(bad)} 
                      total={Number(countTotalFeedback())} 
                      positivePercentage={Number(countPositiveFeedbackPercentage())} 
                      />
          </Section>
      }    
</> 
  );
}
 
 