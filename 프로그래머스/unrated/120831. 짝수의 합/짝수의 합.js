function solution(n) {
   return Array(n).fill(1).map((v,idx) => v + idx).filter( v => v % 2 === 0).reduce((a,b) => a + b ,0)
}