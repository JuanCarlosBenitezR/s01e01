import React from 'react';

const ButtonPhrase = ({ onUpdatePhrase }) => {
	return (
		<button
			className="font-bold rounded-2xl h-fit w-fit mx-auto mb-2 px-3 text-base md:text-2xl lg:text-4xl
       xl:text-5xl bg-red-600 hover:bg-amber-300 text-amber-300 hover:text-red-600 active:bg-green-500"
			onClick={onUpdatePhrase}
		>
			Ver otra frase
		</button>
	);
};

export default ButtonPhrase;
