import { useState } from 'react';
import phrases from './data/phrases.json';
import { getItemRandom } from './lib/utils';
import './App.css';
import {
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
} from './assets/images';
const colors = [img1, 'lime', 'purple', 'green'];
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function App() {
	const [img, setImg] = useState(getItemRandom(images));
	const [phrase, setPhrase] = useState(getItemRandom(phrases));
	const changePhrase = () => {
		setPhrase(getItemRandom(phrases));
		setColor(getItemRandom(colors));
		setImg(getItemRandom(images));
	};
	const [color, setColor] = useState(colors);
	const imgUrl = `url(${img}`;
	console.log(phrase);
	return (
		<div className="container" style={{ backgroundImage: imgUrl }}>
			<div className="card blur-none">
				<h2>{phrase.phrase}</h2>
				<p>{phrase.author}</p>
				<button
					className="bg-green-500 hover:bg-red-500"
					onClick={changePhrase}
				>
					Ver otra frase
				</button>
			</div>
		</div>
	);
}

export default App;
