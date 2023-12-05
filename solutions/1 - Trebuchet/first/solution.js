import { stringToArr } from '../../../utils/utils.js';
import { data } from './data.js';

export function getSumOfCalibrationValues(data) {
	const arr = stringToArr(data);
	let result = 0;

	for (let line of arr) {
		if (!line.length) {
			continue;
		}

		let left = 0;
		let right = line.length - 1;
		let leftDigit = null,
			rightDigit = null;

		// use two pointers to go through array from both sides
		while (!leftDigit || !rightDigit) {
			const leftNum = parseInt(line[left]);
			const rightNum = parseInt(line[right]);

			if (leftDigit == null) {
				!Number.isNaN(leftNum) ? (leftDigit = leftNum) : left++;
			}
			if (rightVal == null) {
				!Number.isNaN(rightNum) ? (rightVal = rightNum) : right--;
			if (rightDigit == null) {
				!Number.isNaN(rightNum) ? (rightDigit = rightNum) : right--;
			}

			// on last iteration, check if we have any value and duplicate it
			if (left === right) {
				leftDigit != null ? (rightDigit = leftDigit) : (leftDigit = rightDigit);
			}
			if (leftDigit != null && rightDigit != null) {
				break;
			}
		}

		result += leftDigit * 10 + rightDigit;
	}

	return result;
}

console.log(getSumOfCalibrationValues(data));
