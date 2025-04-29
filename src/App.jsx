import { useState } from 'react';
import phrases from './data/phrases.json';
import { getItemRandom } from './lib/utils';
import './App.css';
import ButtonPhrase from './ButtonPhrase';
import { img1, img2, img3, img4 } from './assets/images';
const colors = [img1, 'lime', 'purple', 'green'];
const images = [img1, img2, img3, img4];

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
			className="containerApp w-full  pt-20 lg:pt-25"
			style={{ backgroundImage: imgUrl }}
		>
			<div className=" card justify-items-center rounded-xl mb-5  min-h-1/3 h-full max-h-10/10 py-5 pr-10 text-base md:text-2xl lg:text-4xl xl:text-5xl">
				<h2 className="text-center text-balance font-bold px-14 pt-15 md:px-40 lg:px-55 xl:px-84  2xl:px-110 pt-5 ">
					{phrase.phrase}
				</h2>
				<br />
				<p className=" italic text-left pl-30 md:pl-50 xl:pl-92 2xl:pl-125 text-nowrap  w-full text-base lg:text-2xl 2xl:text-4xl">
					-{phrase.author}
				</p>
				<br />
			</div>
			<ButtonPhrase onUpdatePhrase={changePhrase} />
		</div>
	);
}

export default App;
