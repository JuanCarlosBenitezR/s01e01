import { useState } from 'react';
import phrases from './data/phrases.json';
import { getItemRandom } from './lib/utils';
import './App.css';
import ButtonPhrase from './ButtonPhrase';
import { img1, img2, img3, img4 } from './assets/images';
import Title from './Title';
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
			className="container  pt-20 lg:pt-25"
			style={{ backgroundImage: imgUrl }}
		>
			<div className=" card justify-items-center rounded-xl   min-h-1/3 h-full max-h-10/10 text-base md:text-2xl lg:text-4xl  py-5 pr-10">
				<h2 className="text-center text-balance font-bold px-14 md:px-40 lg:px-55 xl:px-84 pt- 2xl:px-116 pt-5 ">
					{phrase.phrase}
				</h2>
				<br />
				<p className="text-left pl-30 md:pl-50 xl:pl-92 2xl:pl-125 text-nowrap  w-full text-sm lg:text-xl">
					-{phrase.author}
				</p>
				<br />
				<ButtonPhrase onUpdatePhrase={changePhrase} />
			</div>
		</div>
	);
}

export default App;
