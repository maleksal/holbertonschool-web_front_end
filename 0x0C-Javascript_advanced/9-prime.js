function countPrimeNumbers(){
    let counter = 0
	let primes = 0
    for ( ; counter <= 100; counter++) {


        for (let i = 2; i < counter; i++) {
    
            if (counter%i !== 0) {
				primes += 1;
		    }
	    }

    }
    return primes;
}


var t0 = performance.now();

countPrimeNumbers();

var t1 = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${(t1- t0) / 100} milliseconds`);