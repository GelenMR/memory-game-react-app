import { useContext } from 'react';
import { AnimalsCard, FinishedBoard } from './index';
import Context from '../context/StaticContext';

export const MemoryBoard = () => {
	const {
        messyImages,
        handleShowImage,
        finished,
        levelGame,
    } = useContext(Context);

	return (
        <>
            {finished && <FinishedBoard /> }

			<div className='flex flex-wrap justify-center max-w-[1150px]'>
				<div
					className={`grid gap-.5 mx-auto 
						${levelGame === 6 && 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'}
						${levelGame === 9 && 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6'}
						${levelGame === 12 && 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6'}
						${levelGame === 16 && 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'}
						${levelGame === 20 && 'grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10'}`}
				>
					{messyImages.map((image, index) => (
						<div key={`${index}`}>
							<AnimalsCard
								pos={index}
								{...image}
								handleShowImage={handleShowImage}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
