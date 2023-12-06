import { data } from '../data.js';
import { parseGameSets } from '../utils.js';

function cubeGame(data) {
	const gameSets = parseGameSets(data);
	let result = 0;

	for (let setIndex = 0; setIndex < gameSets.length; setIndex++) {
		const gameSet = gameSets[setIndex];
		const setMax = {
			r: 0,
			g: 0,
			b: 0,
		};

		if (!gameSet.length) {
			continue;
		}

		gameSet.forEach((set) => {
			const cubeStrings = set.split(',');

			for (let cubeStr of cubeStrings) {
				if (!cubeStr.length) {
					return;
				}

				const numericVal = Number.parseInt(cubeStr);
				const color = cubeStr.at(-1);
				setMax[color] = Math.max(numericVal, setMax[color]);
			}
		});

		result += setMax.r * setMax.g * setMax.b;
	}

	return result;
}

console.log(cubeGame(data));
