import React from 'react';

const ButtonPhrase = ({ onUpdatePhrase }) => {
	console.log('Clic a hijo');
	return (
		<button
			className="ml- bg-green-500 hover:bg-red-500 "
			onClick={onUpdatePhrase}
		>
			Ver otra frase
		</button>
	);
};

export default ButtonPhrase;
