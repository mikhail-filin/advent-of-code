import { data } from '../data.js';
import { parseGameSets } from '../utils.js';

const colorThreshold = {
	r: 12,
	g: 13,
	b: 14,
};

function cubeGame(data) {
	let gameSets = parseGameSets(data);
	let result = 0;

	for (let setIndex = 0; setIndex < gameSets.length; setIndex++) {
		const gameSet = gameSets[setIndex];
		let isValid = true;

		if (!gameSet.length) {
			continue;
		}

		gameSet.forEach((set) => {
			const cubeStrings = set.split(',');

			for (let cubeStr of cubeStrings) {
				const numericVal = Number.parseInt(cubeStr.trim());
				const color = cubeStr.at(-1);

				if (numericVal > colorThreshold[color]) {
					isValid = false;
					break;
				}
			}
		});

		if (isValid) {
			result += setIndex;
		}
	}

	return result;
}

console.log(cubeGame(data));
