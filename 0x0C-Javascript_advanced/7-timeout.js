console.log('Start of the execution queue');

for (let i = 1; i <= 100; ++i) {
	console.log(i)
}

setTimeout(console.log('Final code block to be executed'), 0);

console.log('End of the loop printing');