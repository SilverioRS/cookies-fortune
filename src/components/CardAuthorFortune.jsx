import PropTypes from 'prop-types'

const CardAuthorFortune = ({author}) => {
    
    return (
        
        <div className='author'>
            <p>Autor: {author}</p>
        </div>
            
        
    );
};

CardAuthorFortune.propTypes = {
    author: PropTypes.string.isRequired,
  };

export default CardAuthorFortune;