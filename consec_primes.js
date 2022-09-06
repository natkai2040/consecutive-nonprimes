let num = 2; 
let consec = 0;
let primelist = [];
while (consec < 14){
  if (primelist.reduce((hasdivisor, d)=> (num%d===0)? false:hasdivisor, true)){
    primelist.push(num);
    consec = 0;
  }
  else {
    ++consec;
  }
  ++num;
}
console.log(num-1); //14th number



let primes = "";
for (let i = 537; i>=523;--i){
  primes = i.toString() + " Prime Factors: (" ;
  primelist.forEach(function(d) {
    if (i%d===0) {
      primes = primes.concat(d.toString()+ " ");
    }
  });
  console.log(primes.concat(")\\\\"));
}