import { useState } from 'react';
import phrases from './data/phrases.json';
import { getItemRandom } from './lib/utils';
import './App.css';
import ButtonPhrase from './ButtonPhrase';
import {
	img1,
	img10,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
} from './assets/images';
const colors = [img1, 'lime', 'purple', 'green'];
const images = [img10];

function App() {
	const [img, setImg] = useState(getItemRandom(images));
	const [phrase, setPhrase] = useState(getItemRandom(phrases));
	const changePhrase = () => {
		//debo pasar funciones al nuevo componente
		console.log('Se ejecutaa');
		setPhrase(getItemRandom(phrases));
		setColor(getItemRandom(colors));
		setImg(getItemRandom(images));
	};
	const [color, setColor] = useState(colors);
	const imgUrl = `url(${img}`;
	return (
		<div
			className="container w-full bg-center bg-cover bg-repeat-space"
			style={{ backgroundImage: imgUrl }}
		>
			<div className=" card justify-items-center rounded-xl   min-h-1/3 h-full max-h-10/10 text-base lg:text-4xl  py-5 px-10">
				<h2 className="text-center font-bold">{phrase.phrase}</h2>
				<br />
				<p className="text-left  w-full text-sm lg:text-xl">-{phrase.author}</p>
				<br />
				{/*         
        <button
			className="ml- bg-green-500 hover:bg-red-500 "
			onClick={changePhrase}
		>
			Ver otra frase
		</button> */}
				<ButtonPhrase onUpdatePhrase={changePhrase} />
			</div>
		</div>
	);
}

export default App;
