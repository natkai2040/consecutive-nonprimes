
let consec = 0;
let targetLength = 14; // Change to any number > 0 to find nonprime sequence of this length
let num = 2; 
let primelist = [];

while (consec < targetLength){ 
  if (primelist.reduce((hasdivisor, d)=> (num%d===0)? false:hasdivisor, true)){
    primelist.push(num);
    consec = 0;
  }
  else {
    ++consec;
  }
  ++num;
}
let nthNonPrime = num-1; // targetLength-th number in sequence



let primes = "";
for (let i = nthNonPrime; i > (nthNonPrime - targetLength);--i){ //print list of nonprimes
  primes = i.toString() + " Prime Factors: (" ;
  primelist.forEach(function(d) {
    if (i%d===0) {
      primes = primes.concat(d.toString()+ " ");
    }
  });
  console.log(primes.concat(")"));
}
