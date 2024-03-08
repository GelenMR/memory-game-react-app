import reverseCard from './../../src/assets/reverseCard.png';
import PropTypes from 'prop-types';

export const AnimalsCard = ({ pos, title, url, state, handleShowImage }) => {

    return (
        <div className='p-1 bg-center bg-no-repeat'>
            <button onClick={() => handleShowImage(pos)}>
                <img
                    src={state === 0 ? reverseCard : url}
                    className='card'
                    alt={state === 0 ? 'image-?' : title}
                />
            </button>
        </div>
    )
}

AnimalsCard.propTypes = {
    pos: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    state: PropTypes.number.isRequired,
    handleShowImage: PropTypes.func.isRequired
}
