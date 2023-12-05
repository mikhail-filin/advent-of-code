import { stringToArr } from '../../../utils/utils.js';
import { data } from './data.js';

function trebuchet(data) {
	const arr = stringToArr(data);
	let result = 0;

	for (let line of arr) {
		if (!line.length) {
			continue;
		}

		let left = 0;
		let right = line.length - 1;
		let leftVal = null,
			rightVal = null;

		// use two pointers to go through array from both sides
		while (left <= right) {
			const leftNum = parseInt(line[left]);
			const rightNum = parseInt(line[right]);

			if (leftVal == null) {
				!Number.isNaN(leftNum) ? (leftVal = leftNum) : left++;
			}
			if (rightVal == null) {
				!Number.isNaN(rightNum) ? (rightVal = rightNum) : right--;
			}

			// on last iteration, check if we have any value and duplicate it
			if (left === right) {
				leftVal != null ? (rightVal = leftVal) : (leftVal = rightVal);
			}
			if (leftVal != null && rightVal != null) {
				break;
			}
		}

		result += leftVal * 10 + rightVal;
	}

	return result;
}

console.log(trebuchet(data));
