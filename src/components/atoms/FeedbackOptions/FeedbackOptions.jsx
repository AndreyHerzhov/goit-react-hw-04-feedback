import { OptionButton } from './FeedbackOptions.styled'
import PropTypes from "prop-types"
import { nanoid } from 'nanoid'


 
 

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
    {options.map(el => 
    <OptionButton 
            onClick={onLeaveFeedback} 
            key={nanoid()} name={el}>{el}
      </OptionButton>
    )}
    
    </>
  );
};


export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired
 
} 

   