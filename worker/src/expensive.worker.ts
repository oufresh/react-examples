/*export const calculatePrimes = (iterations: number, multiplier: number): Array<number> => {
    while(true)  {
      let primes = [];
      for (let i = 0; i < iterations; i++) {
        let candidate = i * (multiplier * Math.random());
        let isPrime = true;
        
        for (var c = 2; c <= Math.sqrt(candidate); ++c) {
          if (candidate % c === 0) {
            // not prime
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          primes.push(candidate);
        }
      }
      return primes;
    }
  }*/

  // block for `time` ms, then return the number of loops we could run in that time:
export function expensive(time:number):number {
  let start = Date.now(),
      count = 0
  while (Date.now() - start < time) count++
  return count
}