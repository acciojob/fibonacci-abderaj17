function fibonacci(num) {
// your code here
	let a = 0;
	let b = 1;
	if(num == 0 || num == 1){
		return 0;
	}
	for(let i = 2; i <= num; i++){
		let temp = a+b;
		a = b;
		b = temp;
	}
	return a;
}

module.exports = fibonacci;
