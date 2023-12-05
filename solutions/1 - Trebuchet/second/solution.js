import { data } from "../data.js";
import { getSumOfCalibrationValues } from "../first/solution.js";

// cheesing data a little.
// we want to replace string equivalent with digit, but we don't want to override adjacent numbers
// so it will work for example like 'eightwothree' -> 823, not 8wo3 or eigh23
const digitMap = {
	one: 'o1e',
	two: 't2o',
	three: 't3e',
	four: 'f4r',
	five: 'f5e',
	six: 's6x',
	seven: 's7n',
	eight: 'e8h',
	nine: 'n9e'
}

function trebuchet(data) {
	for (let digitStr of Object.keys(digitMap)) {
		data = data.replaceAll(digitStr, digitMap[digitStr]);
	}

	return getSumOfCalibrationValues(data);
}

console.log(trebuchet(data));
