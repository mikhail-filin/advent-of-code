export function parseGameSets(str) {
	return str.split('\n').map((game) => {
		return game
			.replace(/Game [0-9]+: /, '')
			.replaceAll(/ blue/g, 'b')
			.replaceAll(/ green/g, 'g')
			.replaceAll(/ red/g, 'r')
			.split(';');
	});
}
