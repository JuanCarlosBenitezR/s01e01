import React from 'react';

const ButtonPhrase = ({ onUpdatePhrase }) => {
	console.log('Clic a hijo');
	return (
		<button
			className="mb-10  hover:bg-red-700 text-black-400 hover:text-amber-400 rounded-md "
			onClick={onUpdatePhrase}
		>
			Ver otra frase
		</button>
	);
};

export default ButtonPhrase;
