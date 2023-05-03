import PropTypes from 'prop-types'


const CardFortune = ({phrase}) => {
    
    return (
        
        <div className='card'>
            <p>{phrase}</p>
        </div>
            
        
    );
};

CardFortune.propTypes = {
    phrase: PropTypes.string.isRequired,
  };

export default CardFortune;