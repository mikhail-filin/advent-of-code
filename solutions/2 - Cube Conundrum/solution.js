import { data } from './data.js';

const colorThreshold = {
	r: 12,
	g: 13,
	b: 14,
};

function cubeGame(data) {
	let games = data.split('\n').map((game) => {
		return game
			.replace(/Game [0-9]+: /, '')
			.replaceAll(/ blue/g, 'b')
			.replaceAll(/ green/g, 'g')
			.replaceAll(/ red/g, 'r')
			.split(';');
	});
	let result = 0;

	for (let gameIndex = 0; gameIndex < games.length; gameIndex++) {
		const game = games[gameIndex];
		let isValid = true;

		if (!game.length) {
			continue;
		}

		game.forEach((gameSet) => {
			const cubeStrings = gameSet.split(',');

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
			result += gameIndex;
		}
	}

	return result;
}

console.log(cubeGame(data));
