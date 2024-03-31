function calcAverage(nums) {
	let filtred = nums.filter(item => typeof item === 'number');
	let sum = 0;
	for (let i = 0; i < filtred.length; i++) {
		sum += filtred[i];
	}
	return sum / filtred.length;
}
alert(calcAverage([1, 2, "2", "hello", "", 10, 4]));